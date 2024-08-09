'use client'

import Image, {ImageProps} from 'next/image'
import {useState, useCallback, CSSProperties, useMemo, memo} from 'react'

interface ImageFilterProps extends Omit<ImageProps, 'style'> {
    grayscale?: number
    sepia?: number
    brightness?: number
    contrast?: number
    blur?: number
}

export const ImageFilter: React.FC<ImageFilterProps> = memo(
    ({src, alt, width, height, grayscale = 0, sepia = 0, brightness = 100, contrast = 100, blur = 0, ...props}) => {
        const [imageError, setImageError] = useState(false)

        const handleError = useCallback(() => {
            setImageError(true)
        }, [])

        const filterStyle: CSSProperties = useMemo(
            () => ({
                filter: `
      grayscale(${grayscale}%)
      sepia(${sepia}%)
      brightness(${brightness}%)
      contrast(${contrast}%)
      blur(${blur}px)
    `,
            }),
            [grayscale, sepia, brightness, contrast, blur],
        )

        if (imageError) {
            return <div>Image failed to load</div>
        }

        return (
            <div style={filterStyle}>
                <Image src={src} alt={alt} width={width} height={height} onError={handleError} {...props} />
            </div>
        )
    },
)
