'use client'

import Image, {ImageProps} from 'next/image'
import {useState, useCallback, CSSProperties, useMemo, memo} from 'react'

import {ImageFilter} from './type'
import {getFilter} from './utils'

export type NextImageFilterProps = Omit<ImageProps, 'style'> & ImageFilter

export const NextImageFilter: React.FC<NextImageFilterProps> = memo(
    ({src, alt, width, height, grayscale = 0, sepia = 0, brightness = 100, contrast = 100, blur = 0, ...props}) => {
        const [imageError, setImageError] = useState(false)

        const handleError = useCallback(() => {
            setImageError(true)
        }, [])

        const filterStyle: CSSProperties = useMemo(
            () => getFilter({grayscale, sepia, brightness, contrast, blur}),
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
