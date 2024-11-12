export default function AccountNav({prop}){
    const{showUserAccount,updateUserStatus,showTrackMyOrder,updateTrack,showAllOrder,updateOrderStatus,showContactUs,updateContact,showFAQs,updateFAQs,showSection}=prop;
    return(<section className="acount-header-button-section">
        <div>
          <button
            className={
              showUserAccount ? "acount-header-button-section-active" : ""
            }
            onClick={() => showSection(updateUserStatus)}
          >
            My Profile
          </button>
        </div>
        <div>
          <button
            className={
              showTrackMyOrder ? "acount-header-button-section-active" : ""
            }
            onClick={() => showSection(updateTrack)}
          >
            Track my order
          </button>
        </div>
        <div>
          <button
            className={
              showAllOrder ? "acount-header-button-section-active" : ""
            }
            onClick={() => showSection(updateOrderStatus)}
          >
            Order History
          </button>
        </div>
        <div>
          <button
            className={
              showContactUs ? "acount-header-button-section-active" : ""
            }
            onClick={() => showSection(updateContact)}
          >
            Contact Us
          </button>
        </div>
        <div>
          <button
            className={
              showFAQs ? "acount-header-button-section-active" : ""
            }
            onClick={() => showSection(updateFAQs)}
          >
            FAQs
          </button>
        </div>
      </section>
  )
  }
  