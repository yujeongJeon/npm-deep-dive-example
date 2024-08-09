import Image, {ImageProps} from 'next/image'
import {CSSProperties, memo, useCallback, useMemo, useState} from 'react'

type OptimizedImageProps = Omit<ImageProps, 'width' | 'height'> & {
    width: number
    height: number
}

const shimmer = (w: number, h: number): string => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#f6f7f8" offset="0%" />
        <stop stop-color="#edeef1" offset="20%" />
        <stop stop-color="#f6f7f8" offset="40%" />
        <stop stop-color="#f6f7f8" offset="100%" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#f6f7f8" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`

const toBase64 = (str: string): string =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)

export const OptimizedImage = memo(({src, alt, width, height, ...props}: OptimizedImageProps) => {
    const [isLoading, setLoading] = useState<boolean>(true)

    const containerStyle: CSSProperties = useMemo(
        () => ({
            position: 'relative',
            overflow: 'hidden',
            opacity: isLoading ? 0.5 : 1,
            transition: 'opacity 0.3s ease-in-out',
        }),
        [isLoading],
    )

    const handleLoadingComplete = useCallback(() => {
        setLoading(false)
    }, [])

    const blurDataUrl = useMemo(() => `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`, [width, height])

    return (
        <div style={containerStyle}>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                layout="responsive"
                objectFit="cover"
                quality={75}
                placeholder="blur"
                blurDataURL={blurDataUrl}
                onLoadingComplete={handleLoadingComplete}
                {...props}
            />
        </div>
    )
})

OptimizedImage.displayName = 'OptimizedImage'
