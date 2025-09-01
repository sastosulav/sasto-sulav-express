import { Container } from '@/components/ui/container'
import { FooterCopyright } from './footer-copyright'
import { FooterDeliveryFeatures } from './footer-delivery-features'

export const Footer = () => {
  return (
    <footer>
      {/* <div className="bg-gray-50 lg:pb-28 pb-20 lg:space-y-28 space-y-10"> */}
      <div className="bg-gray-50">
        <FooterDeliveryFeatures />
        {/* <FooterLinks /> */}
      </div>
      <Container>
        {/* <FooterContacts /> */}
        <FooterCopyright />
      </Container>
    </footer>
  )
}
