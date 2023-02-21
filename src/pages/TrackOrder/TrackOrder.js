import React from 'react'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import TrackOrderContent from './components/TrackOrderContent'

export default function TrackOrder() {
  return (
    <main>
      <Breadcrumb location="Track Order"/>
      <TrackOrderContent />
    </main>
  )
}
