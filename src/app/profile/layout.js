export default function ProfileLayout({ children }) {
  return (
    <div>
      <h1>Static Header from layout.js</h1>
      <br />
      <br />
      <br />
      {children}

      <br />
      <br />
      <br />
      <h1>Static Footer</h1>
    </div>
  );
}

//This layout.js runs first with its content and in each route {children} is changed according to change in page.js of each route.
//In /profile it run this layout.js with page.js of profile folder
//In /profile/admin it run layout.js with page.js of admin folder and children is replace by admin folders's page.js
//In /profile/usr it run layout.js with page.js of user folder and children is replace by user folders's page.js
