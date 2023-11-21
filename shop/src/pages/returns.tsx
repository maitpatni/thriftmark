import { getLayout } from '@components/layout/layout';

export { getStaticProps } from '@framework/homepage/standard';

export default function CancellationPolicy() {
  return (
    <>
      
      <div
      className="flex items-center justify-center pt-4 pb-20 px-6 md:px-20 lg:px-32 xl:px-40 2xl:px-48 md:py-20"
      style={{
        backgroundImage: 'url("/assets/images/homepage/policies-page-background-v1.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundAttachment: 'fixed',
        position: 'relative',
      }}
    >
      <div
          style={{
            position: 'absolute', // Position absolutely to cover the parent
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backdropFilter: 'blur(10px)', // Apply the blur effect
          }}
        ></div>
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div>
        <h2 className="text-[#535BA3] text-center font-bold mt-10 mb-4 text-4xl sm:text-5xl md:text-6xl">
            CANCELLATIONS, RETURNS & REFUNDS
          </h2>
  
          <p className="text-gray-700 mb-4">You are protected every time you order an item on Thriftmark. Return and full refund is covered if your item never ships or does not match the description in the post.</p>
  
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">CANCELLATION</h3>
          <p className="text-gray-700 mb-4">Orders can be cancelled either before the seller accepts the order, or if the seller cannot ship. The amount you have paid will be refunded to you in full.</p>
          
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">REFUND</h3>
          <p className="text-gray-700 mb-4">Refund will be issued to your original payment method. If it is by Card/Net Banking/UPI, please allow 3 to 7 business days for the credit to appear in your account, depending on the bank’s processing time.</p>
  
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">RETURN</h3>
          <p className="text-gray-700 mb-4">To request for return/refund after item is shipped, buyer must raise an issue through Order Details in app within 72 hours of delivery, as determined by the tracking information.<br /><br />After 72 hours or as soon as you give a positive review, the order is deemed as satisfactorily completed - payment will be issued to the seller and return/refund will no longer be possible. <br /><br />If you believe seller is at fault and you have an opening video: you must email admin@thriftmark.in within 72 hours of delivery mentioning the Order ID in the headline and attach an opening video and clear photos of the defects. Return shipping will be covered by the seller if the video clearly establishes that the seller is at fault.</p>
          
          <p className="text-gray-600 italic mb-4">(The opening video should be taken in one go, to start before opening the package, with shipping label visible, and include checking all sides of the package and checking for any defects. Defects should be visible from the video.)</p>
          
          <p className="text-gray-700 mb-4">If seller is not at fault, or you do not have an opening video: you may initiate return by paying our standard shipping fee based on item weight. Once item is delivered back to the seller in the original condition, you will be refunded the item’s full value.</p>
  
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">TRY & BUY</h3>
          <p className="text-gray-700 mb-4">If you have opted for the TRY&BUY order, you can request return/refund at the time of delivery, as determined by tracking information. Opting for the TRY &BUY service would be available only on prepaid orders and might attract an additional convenience fee depending on the delivery address.</p>
  
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">What is Covered</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Buyer changes mind.</li>
            <li>Seller failed to disclose defects or expiry information in the description or images.</li>
            <li>Damaged, wrong, or missing item. As this is often due to seller negligence or poor packaging, the seller shall send the correct item or the missing item without delay at his/her own cost. If the buyer does not wish to wait, a refund of the item’s value can be issued and deducted from the seller. If the seller wants the item back, he/she will bear the return cost.</li>
          </ul>
  
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">What is Not Covered</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Swaps/Exchanges. Prices are often distorted in such transactions, therefore they are not allowed.</li>
            <li>Transactions outside Thriftamrk’s website. When payment for the full value of the items is not processed through the Thriftmark platform, we cannot guarantee the parties involved will abide by our guidelines. Buyer bears all the risks associated with such transactions.</li>
          </ul>
  
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">SELLER ÉTIQUETTES</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Disclose all defects in the item post if any, whether minor or major, in the post to avoid unnecessary disappointments and maximize cash amount receivable.</li>
            <li>Sellers are advised to make packing videos of their orders. In case of order or rating disputes, the packing video will help us arrive at a conclusion quickly.</li>
            <li>Quote a price that provides a good value to your buyers. Thriftmark is a close-knit community - your good deeds will not go unnoticed.</li>
            <li>Keep in mind that buyers could give negative reviews and result in a lower rating, which will affect the visibility of your products and your ability to sell more.</li>
          </ul>
  
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">QUESTIONS & FEEDBACK</h3>
          <p className="text-gray-700 mb-2">You can write to our customer support team on <b><a href="mailto:admin@thriftmark.in">admin@thriftmark.in</a></b></p>
          <p className="text-gray-700 mb-4">Thriftmark Lifestyles Pvt Ltd, Kolkata, West Bengal, India.</p>
        </div>
        </div>
      </div>
    </>
  );   
}

CancellationPolicy.getLayout = getLayout;