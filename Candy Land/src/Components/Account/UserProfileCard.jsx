import { getCookie } from "../../utils/cookies";

export default function UserProfileCard() {
  const retrievedUserInfo = JSON.parse(getCookie('userInfo'));    
  
  let usersData =  retrievedUserInfo;
  return (
    <>
      <section className="account-page-user-section">
        <div>
          <img
            className="account-page-user-image"
            src="https://www.rainforest-alliance.org/wp-content/uploads/2021/06/three-toed-sloth-teaser-1.jpg.optimal.jpg"
            alt=""
          />
        </div>
        <div>
          <div>
            <span>Name</span>
            <span>{usersData.name}</span>
          </div>
          <div>
            <span>Mail</span>
            <span>{usersData.mail}</span>
          </div>
          <div>
            <span>Contact Number</span>
            <span>{usersData.contact}</span>
          </div>
          <div>
            <span>Saved Address</span>
            <span>
              {usersData.address?.map((address, idx) => (
                <div key={idx}>{address}</div>
              ))}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
