const partners = () => {
  const cardRestaurants = document.querySelector(".cards-restaurants");
const modalAuth = document.querySelector(".modal-auth");
  const renderItems = (data) => {
    data.forEach((item) => {
      const { image, kitchen, name, price, products, stars, time_of_delivery } =
        item;

      const a = document.createElement("a");
      a.setAttribute("href", "/restaurant.html");
      a.classList.add("card");
      a.classList.add("card-restaurant");
      a.dataset.products = products;
      a.innerHTML = `<img src="${image}" alt="${name}" class="card-image" />
						<div class="card-text">
							<div class="card-heading">
								<h3 class="card-title">${name}</h3>
								<span class="card-tag tag">${time_of_delivery} мин</span>
							</div>
							<!-- /.card-heading -->
							<div class="card-info">
								<div class="rating">
									${stars}
								</div>
								<div class="price">От ${price} ₽</div>
								<div class="category">${kitchen}</div>
							</div>
						</div>`;
      a.addEventListener("click", (e) => {
        if (!localStorage.getItem("user")) {
          e.preventDefault();
          modalAuth.style.display = "flex";
        } else {
          e.preventDefault();
          console.log(item);
          localStorage.setItem("restaurant", JSON.stringify(item));
          window.location.href = "/restaurant.html";
          login(user);
        }
      });

      cardRestaurants.append(a);
    });
  };

  fetch("https://test-95a60-default-rtdb.firebaseio.com/db/partners.json")
    .then((response) => response.json())
    .then((data) => {
      renderItems(data);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });

}
partners()