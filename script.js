function updateProduct(element) {
  const newImageSrc = element.src;
  const newName = element.getAttribute("data-name");           // ✅ Get name
  const newPrice = element.getAttribute("data-price");
  const newDescription = element.getAttribute("data-description");

  document.getElementById("main-image").src = newImageSrc;
  document.getElementById("product-name").textContent = newName;    // ✅ Update name
  document.getElementById("product-price").textContent = newPrice;
  document.getElementById("product-description").textContent = newDescription;
}

function addToCart() {
  const quantity = document.getElementById("quantity").value;
  const name = document.getElementById("product-name").textContent;   // ✅ Get name
  const price = document.getElementById("product-price").textContent;

  alert(`Added ${quantity} "${name}" at ${price} to the cart!`);

  // Optional: Save to localStorage
  localStorage.setItem("cartItems", JSON.stringify({
    name: name,           // ✅ Save name
    quantity: quantity,
    price: price
  }));
}
