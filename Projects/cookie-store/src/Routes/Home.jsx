import React, { useState } from "react";

const Home = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const handleScroll = () => {
    const part1 = document.querySelector(".part-1");
    if (window.scrollY >= document.querySelector(".part-0").offsetTop + 70) {
      part1.style.position = "fixed";
      part1.style.top = "0";
      part1.style.padding = "0.5em 1em";
    } else {
      part1.style.position = "relative";
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <div>
      <section className="part-0">
        <nav id="profile">
          <a href="#">My Profile</a>
        </nav>
        <nav id="faq">
          <a href="#">FAQs</a>
        </nav>
        <nav className="contact">
          <a href="#">Contact</a>
        </nav>
        <address className="address">
          <a href="tel:9953963660">Call</a>
          <a href="mailto:its.saksham912@gmail.com">Email</a>
        </address>
        <nav id="work">
          <a href="#">Work with me</a>
        </nav>
        <nav className="flex justify-end w-[73%]">
          <span className="text-pink-500 mr-6">Get Social</span>
          <a href="#" className="w-[3.5em]">
            <img src="./images/insta.png" className="h-[25px]" alt="Instagram" />
          </a>
          <a href="#" className="w-[3.5em]">
            <img src="./images/telegram.png" className="h-[25px]" alt="Telegram" />
          </a>
          <a href="#" className="w-[3.5em]">
            <img src="./images/discord.jpg" className="h-[25px]" alt="Discord" />
          </a>
        </nav>
      </section>

      <section className="fade-background">
        <div className="popup-content">
          <button className="close-popout">X</button>
          <iframe
            title="iframe_link"
            scrolling="no"
            className="iframe"
          ></iframe>
        </div>
      </section>

      <section className="part-1 flex justify-between items-center pr-12 pt-2 text-teal-700">
        <nav>
          MOM'S <span className="text-4xl text-pink-500">Cookie</span>
        </nav>
        <div className="flex items-center">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search Here...."
              className="search-input"
            />
            <button className="search-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </div>
          <nav className="ml-10">
            <a href="#" className="font-bold text-white bg-pink-500 p-2 rounded-lg">
              Home
            </a>
          </nav>
          <nav className="ml-10 text-pink-500">
            <a href="/about">About</a>
          </nav>
          <nav className="ml-10 text-pink-500">
            <a href="/store">Store</a>
          </nav>
          <nav className="cart ml-10">
            <h1>Cart items</h1>
          </nav>
          <button type="button" onClick={toggleCart} className="toggle-cart btn ml-4">
            Cart
          </button>
        </div>
      </section>

      {cartVisible && <div className="notFound">Cart is empty</div>}

      <section className="part-2 bg-pink-100 p-8">
        <h1>
          Welcome to{" "}
          <span className="text-pink-700 text-2xl">MOM'S COOKIE</span>
        </h1>
        <p className="text-lg">
          <strong>MINIMUM ORDER:</strong> 2 Dozen of cookies
        </p>
        <p className="text-lg">
          <strong>NUT ALLERGIES:</strong> Please be advised that our shop uses
          a variety of nuts and peanut butter in some of our cookies.
        </p>
        <h2>Great News! Tins are back in stock!</h2>
        <p className="text-lg">
          <strong>DRESS UP YOUR GIFT!</strong> Sending cookies in our specially
          designed tin is a great way to dress up your gift! It’s round, smart,
          and sturdy. Our sweets are a great way to add a little something extra
          to your gift. Rs.500 each
        </p>
      </section>
    </div>
  );
};

export default Home;
