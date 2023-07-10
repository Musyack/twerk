import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{'Магазин водного ассортимента'}</title>

    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Roomshoper.com',
  description: 'Roomshoper - магазин вводного ассортимента с большим ассортиментом и бесплатной доставкой.',
  keywords: 'electronics, buy electronics, cheap electroincs',
}

export default Meta
