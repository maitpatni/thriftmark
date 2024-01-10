import { getLayout } from '@components/layout/layout';

export { getStaticProps } from '@framework/homepage/standard';

export default function PrivacyPage() {
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
            PRIVACY POLICY
          </h2>
  
          <p className="text-gray-700 mb-4">Thriftmark Lifestyles Private Limited (as applicable, “Thriftmark,” “we,” “us,” and/or “our”) respects the privacy of our users (“user” or “you”). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="/">www.thriftmark.in</a>. Please read this Privacy Policy carefully. <b>IF YOU DO NOT AGREE WITH THE TERMS OF THIS PRIVACY POLICY, PLEASE DO NOT ACCESS THE WEBSITE.</b>
          <br /><br />We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Website after the date such revised Privacy Policy is posted. </p>
  
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">COLLECTION OF YOUR INFORMATION</h3>
          <p className="text-gray-700 mb-4">We may collect information about you in a variety of ways. The information we may collect via the Website depends on the content and materials you use, and includes:</p>
          <p className="text-gray-700 font-bold mb-4">Personal Data That You Provide Through Services</p>
          <p className="text-gray-700 mb-4">We collect Personal Data from you when you voluntarily provide such information, such as when you register for or use our Services. This information may include:</p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
                <li>Contact information, such as your first and last name, email and mailing addresses, and phone number.</li>
                <li>Profile information, such as your username and password that you may set to establish an online account with us, your photograph, interests, brand preferences, clothing and shoe size. </li>
                <li>Demographic information, such as your postal code, gender, and age </li>
                <li>Content you choose to upload to the Services, such as text, images, audio, and video, along with the metadata associated with the files you upload. </li>
                <li>Transaction information, such as information about payments to and from you and other details of products or services you have purchased through the Services. </li>
                <li>Payment information, such as financial account numbers, payment card information, details regarding payments you make through the Services, and your billing address. </li>
                <li>Usage information, such as information about how you use the Services and interact with us, including information associated with any content you upload to the websites or otherwise submit to us, and information you provide when you use any interactive features of the Services. </li>
                <li>Marketing information, such as your preferences for receiving communications from us, and details about how you engage with our communications. </li>
                <li>Other information that we may collect which is not specifically listed here, but which we will use in accordance with this Privacy Policy or as otherwise disclosed at the time of collection.</li>
            </ul>
          
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">Derivative Data</h3>
          <p className="text-gray-700 mb-4">Information our servers automatically collect when you access the Website, such as your native actions that are integral to the Website, including liking, sharing, following, commenting on or replying to a post, as well as other interactions with the Website and other users via server log files.</p>
  
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">Financial Data</h3>
          <p className="text-gray-700 mb-4">Financial information, such as data related to your payment method (e.g. valid credit card number, expiration date, UPI ID) that we may collect when you purchase, order, return, exchange, or request information about our services from the Website. We store only very limited, if any, financial information that we collect. Otherwise, all financial information is stored by our payment processor, Paytm, and you are encouraged to review their privacy policy and contact them directly for responses to your questions</p>
  
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">Facebook/Google Permissions</h3>
          <p className="text-gray-700 mb-4">The Website may by default access your Facebook/Google basic account information, including your name, email, gender, current city, and profile picture URL, as well as other information that you choose to make public. We may also request access to other permissions related to your account, such as friends, check-ins, and likes, and you may choose to grant or deny us access to each individual permission. For more information regarding Facebook permissions, refer to the Facebook Permissions Reference or Google Account Permissions. </p>
  
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">Geo-Location Information</h3>
          <p className="text-gray-700 mb-4">We may request access or permission to and track location-based information from your mobile device, while you are using the Website, to provide location-based services. If you wish to change our access or permissions, you may do so in your device’s settings. </p>
  
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">Mobile Device Access</h3>
          <p className="text-gray-700 mb-4">We may request access or permission to certain features from your mobile device, including your mobile device’s camera, contacts, microphone, reminders, SMS, social media accounts, storage, and other features. If you wish to change our access or permissions, you may do so in your device’s settings.</p>
  
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">Mobile Device Data</h3>
          <p className="text-gray-700 mb-4">Device information such as your mobile device ID number, model, and manufacturer, version of your operating system, phone number, country, location, and any other data you choose to provide. </p>
  
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">Push Notifications</h3>
          <p className="text-gray-700 mb-2">We may request to send you push notifications regarding your account or the Website. If you wish to opt out from receiving these types of communications, you may turn them off in your device’s settings.</p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">Third-Party Data</h3>
          <p className="text-gray-700 mb-4">Information from third parties, such as personal information or network friends, if you connect your account to the third party and grant the Website permission to access this information. </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">Data From Contests, Giveaways, and Surveys</h3>
          <p className="text-gray-700 mb-4">Personal and other information you may provide when entering contests or giveaways and/or responding to surveys.</p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">USE OF YOUR INFORMATION</h3>
          <p className="text-gray-700 mb-4">Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Website to:</p>
          <ul className="list-decimal list-inside text-gray-700 mb-4">
            <li>Administer sweepstakes, promotions, and contests.</li>
            <li>Assist law enforcement and respond to subpoena.</li>
            <li>Compile anonymous statistical data and analysis for use internally or with third parties.</li>
            <li>Create and manage your account.</li>
            <li>Deliver targeted product recommendations, advertising, coupons, newsletters, and other information regarding promotions and the Website to you.</li>
            <li>Email you regarding your account or order.</li>
            <li>Enable user-to-user communications.</li>
            <li>Fulfil and manage purchases, orders, payments, and other transactions related to the Website.</li>
            <li>Generate a personal profile about you to make future visits to the Website more personalized.</li>
            <li>Increase the efficiency and operation of the Website.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Website.</li>
            <li>Notify you of updates to the Website.</li>
            <li>Offer new products, services, mobile Websites, and/or recommendations to you.</li>
            <li>Perform other business activities as needed.</li>
            <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
            <li>Process payments and refunds.</li>
            <li>Request feedback and contact you about your use of the Website.</li>
            <li>Resolve disputes and troubleshoot problems.</li>
            <li>Respond to product and customer service requests.</li>
            <li>Solicit support for the Website.</li>
          </ul>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">DISCLOSURE OF YOUR INFORMATION</h3>
          <p className="text-gray-700 mb-4">We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-2xl">By Law or to Protect Rights</h3>
          <p className="text-gray-700 mb-4">
            If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation. This includes exchanging information with other entities for fraud protection and credit risk reduction.
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-2xl">Third-Party Service Providers</h3>
          <p className="text-gray-700 mb-4">
            We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-2xl">Marketing Communications</h3>
          <p className="text-gray-700 mb-4">
            With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-2xl">Interactions with Other Users</h3>
          <p className="text-gray-700 mb-4">
            If you interact with other users of the Website, those users may see your name, profile photo, and descriptions of your activity, including sending invitations to other users, chatting with other users, liking posts, following other users.
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-2xl">Online Postings</h3>
          <p className="text-gray-700 mb-4">
            When you post comments, contributions or other content to the Websites, your posts may be viewed by all users and may be publicly distributed outside the Website in perpetuity.
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-2xl">Third-Party Advertisers</h3>
          <p className="text-gray-700 mb-4">
            We may use third-party advertising companies to serve ads when you visit the Website. These companies may use information about your visits to the Website and other websites that are contained in web cookies in order to provide advertisements about goods and services of interest to you.
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-2xl">Affiliates</h3>
          <p className="text-gray-700 mb-4">
            We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-2xl">Business Partners</h3>
          <p className="text-gray-700 mb-4">
            We may share your information with our business partners to offer you certain products, services or promotions.
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-2xl">Social Media Contacts</h3>
          <p className="text-gray-700 mb-4">
            If you connect to the Website through a social network, your contacts on the social network will see your name, profile photo, and descriptions of your activity.
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-2xl">Other Third Parties</h3>
          <p className="text-gray-700 mb-4">
            We may share your information with advertisers and investors for the purpose of conducting general business analysis. We may also share your information with such third parties for marketing purposes, as permitted by law.
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-2xl">Sale or Bankruptcy</h3>
          <p className="text-gray-700 mb-4">
            If we reorganize or sell all or a portion of our assets, undergo a merger, or are acquired by another entity, we may transfer your information to the successor entity. If we go out of business or enter bankruptcy, your information would be an asset transferred or acquired by a third party. You acknowledge that such transfers may occur and that the transferee may decline to honor commitments we made in this Privacy Policy.
          </p>
          <p className="text-gray-700 mb-4">
          We are not responsible for the actions of third parties with whom you share personal or sensitive data, and we have no authority to manage or control third-party solicitations. If you no longer wish to receive correspondence, emails or other communications from third parties, you are responsible for contacting the third party directly.
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">TRACKING TECHNOLOGIES</h3>
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-2xl">Cookies and Web Beacons</h3>
          <p className="text-gray-700 mb-4">
          We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Website to help customize the Website and improve your experience. When you access the Website, your personal information is not collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can remove or reject cookies, but be aware that such action could affect the availability and functionality of the Website. You may not decline web beacons. However, they can be rendered ineffective by declining all cookies or by modifying your web browser’s settings to notify you each time a cookie is tendered, permitting you to accept or decline cookies on an individual basis. 
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-2xl">Internet-Based Advertising</h3>
          <p className="text-gray-700 mb-4">
          Additionally, we may use third-party software to serve ads on the Website, implement email marketing campaigns, and manage other interactive marketing initiatives. This third-party software may use cookies or similar tracking technology to help manage and optimize your online experience with us. For more information about opting-out of interest-based ads, visit the Network Advertising Initiative Opt-Out Tool or Digital Advertising Alliance Opt-Out Tool.
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">THIRD-PARTY WEBSITES</h3>
          <p className="text-gray-700 mb-4">
          The Website may contain links to third-party websites and Websites of interest, including advertisements and external services, that are not affiliated with us. Once you have used these links to leave the Website, any information you provide to these third parties is not covered by this Privacy Policy, and we cannot guarantee the safety and privacy of your information. Before visiting and providing any information to any third-party websites, you should inform yourself of the privacy policies and practices (if any) of the third party responsible for that website, and should take those steps necessary to, in your discretion, protect the privacy of your information. We are not responsible for the content or privacy and security practices and policies of any third parties, including other sites, services or Websites that may be linked to or from the Website.
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">SECURITY OF YOUR INFORMATION</h3>
          <p className="text-gray-700 mb-4">
          We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse. Any information disclosed online is vulnerable to interception and misuse by unauthorized parties. Therefore, we cannot guarantee complete security if you provide personal information.
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">POLICY FOR CHILDREN</h3>
          <p className="text-gray-700 mb-4">
          We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below. </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
          <p className="text-gray-700 mb-4">
          Most web browsers and some mobile operating systems [and our mobile Websites] include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Policy.
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">OPTIONS REGARDING YOUR INFORMATION</h3>
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-2xl">Account Information</h3>
          <p className="text-gray-700 mb-4">
          You may at any time review or change the information in your account or terminate your account by: 
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Logging into your account settings and updating/deleting your account</li>
            <li>Contacting us using the contact information provided below</li>
          </ul>
          <p className="text-gray-700 mb-4">
          Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements. 
          </p>
          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-2xl">Emails and Communications</h3>
          <p className="text-gray-700 mb-4">
          If you no longer wish to receive correspondence, emails, or other communications from us, you may opt-out by: 
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Noting your preferences at the time you register your account with the Website</li>
            <li>Logging into your account settings and updating your preferences.</li>
            <li>Contacting us using the contact information provided below</li>
          </ul>
          <p className="text-gray-700 mb-4">
          If you no longer wish to receive correspondence, emails, or other communications from third parties, you are responsible for contacting the third party directly. 
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">CHANGES TO THIS PRIVACY STATEMENT</h3>
          <p className="text-gray-700 mb-4">
          Thriftmark may amend this Privacy Statement from time to time. Use of information we collect now is subject to the Privacy Statement in effect at the time such information is used. If we make changes in the way we use personal information, we will notify you by posting an announcement on our site or sending you an email. Users are bound by any change to the Privacy Statement when he or she uses or otherwise accesses the Website after such changes have been first posted.
          </p>

          <h3 className="text-[#535BA3] font-semibold mt-5 mb-2 text-xl md:text-3xl">CONTACT US</h3>
          <p className="text-gray-700 mb-4">
          If you have questions or comments about this Privacy Policy, please contact us at <a href="mailto:admin@thriftmark.in">admin@thriftmark.in</a><br></br>Thriftmark Lifestyles Pvt Ltd <br></br>Kolkata, West Bengal, India
          </p>
      </div>
      </div>
    </div>
    </>
  );   
}

PrivacyPage.getLayout = getLayout;