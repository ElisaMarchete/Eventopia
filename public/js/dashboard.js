const createMyEventBtn = document.getElementById("create-event-btn");
const deleteEventBtn = document.querySelectorAll(".delete-event-btn");

createMyEventBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/create-event";
});

for (let i = 0; i < deleteEventBtn.length; i++) {
  deleteEventBtn[i].addEventListener("click", (e) => {
    e.preventDefault();
    fetch(`/api/events/` + e.target.getAttribute("data-id"), {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.href = "/dashboard";
      })
      .catch((err) => console.log(err));
  });
}
