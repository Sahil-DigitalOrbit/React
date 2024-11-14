export default function UserProfileCard({ prop }) {
  let { isLoggedIn, usersList } = prop;
  let usersData = usersList.find((user) => user.uMail == isLoggedIn);
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
            <span>{usersData.uName}</span>
          </div>
          <div>
            <span>Mail</span>
            <span>{usersData.uMail}</span>
          </div>
          <div>
            <span>Contact Number</span>
            <span>{usersData.uContact}</span>
          </div>
          <div>
            <span>Saved Address</span>
            <span>
              {usersData.uAddress.map((address, idx) => (
                <div key={idx}>{address}</div>
              ))}
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
