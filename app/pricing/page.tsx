import Hero from "./(components)/hero"
import Faq from "./(components)/faq"
import Contact from "./(components)/contact"
import Pricecards from "./(components)/pricecards"

const Pricing = () => {
    const faqData = [
        {
            id: 1,
            question: "How does billing work for the Core and Pro Plans?",
            answer: "The Core and Pro Plans have a one-time fee for access to advanced features, and an annual subscription fee to maintain those features."
        },
        {
            id: 2,
            question: "Can I cancel my subscription?",
            answer: "Yes, you can cancel your subscription at any time. Please note that no refunds will be provided for partial subscription periods."
        },
        {
            id: 3,
            question: "What happens if I downgrade from a paid plan to the Free Plan?",
            answer: "If you downgrade, you'll lose access to the advanced features included in the paid plans. Your account will revert to the Free Plan with basic event management capabilities."
        },
        {
            id: 4,
            question: "How can I make changes to my billing information?",
            answer: 'You can update your billing information in the "Account Settings" section of your profile.'
        },
        {
            id: 5,
            question: "What payment methods do you accept?",
            answer: "We currently accept major credit and debit cards for payments"
        }
    ]

  return (
    <div>
        <Hero />
        <Pricecards />
        <Faq faqData ={faqData} />
        <Contact />
    </div>
  )
}

export default Pricing