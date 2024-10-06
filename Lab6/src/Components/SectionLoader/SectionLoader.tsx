import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

const SectionLoader = ({
  children,
  isLoading,
}: {
  children: React.ReactNode
  isLoading: boolean
}) => {
  return (
    <div style={{ position: 'relative' }}>
      {isLoading && (
        <div style={{ position: 'absolute', top: '80%', left: '25%' }}>
          <InfinitySpin width="200" color="#002F34" />
        </div>
      )}
      {children}
    </div>
  )
}

export default SectionLoader
