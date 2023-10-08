import React from "react";

const MainLayout = (props) => {
  return (
    <main className="main-content md:ml-64 bg-white">
      <div className="content-wrapper px-4 md:px-10 mx-auto w-full">
        {props.children}
      </div>
    </main>
  );
};

export default MainLayout;
