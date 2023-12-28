const tableBody = document.getElementById("table-body");
const updateNameInput = document.getElementById("update-name-input");
const updateTitleInput = document.getElementById("update-title-input");
const updateDesInput = document.getElementById("update-des-input");
const updateVenInput = document.getElementById("update-ven-input");
const updateStockInput = document.getElementById("update-stock-input");
const updateBuypriceInput = document.getElementById("update-buyprice-input");
const updateSalepriceInput = document.getElementById("update-saleprice-input");
const updatePurchasequntInput = document.getElementById("update-purchasequnt-input");
const updateProducttypeInput = document.getElementById("update-producttype-input");
const updateShiprateInput = document.getElementById("update-shiprate-input");
const updateBtn = document.getElementById("update-btn");
const cancelBtn = document.getElementById("cancel-btn");
let users = JSON.parse(localStorage.getItem("users")) || [];
let currentUserId = null;

function renderTable() {
  tableBody.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const tr = document.createElement("tr");
    const selectTd = document.createElement("td");
    const idTd = document.createElement("td");
    const pnameTd = document.createElement("td");
    const ptitleTd = document.createElement("td");
    const pdesTd = document.createElement("td");
    const pvenTd = document.createElement("td");
    const stockTd = document.createElement("td");
    const bpriceTd = document.createElement("td");
    const spriceTd = document.createElement("td");
    const pquntTd = document.createElement("td");
    const ptypeTd = document.createElement("td");
    const shiprateTd = document.createElement("td");
    const actionsTd = document.createElement("td");
    const editBtn = document.createElement("button");
    editBtn.className = "edit-btn";
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    const selectCheckbox = document.createElement("input");
    selectCheckbox.type = "checkbox";
    selectTd.appendChild(selectCheckbox);
    idTd.innerText = user.id;
    pnameTd.innerText = user.pname;
    ptitleTd.innerText = user.ptitle;
    pdesTd.innerText = user.pdes;
    pvenTd.innerText = user.pven;
    stockTd.innerText = user.pstock;
    bpriceTd.innerText = user.bprice;
    spriceTd.innerText = user.sprice;
    pquntTd.innerText = user.pqunt;
    ptypeTd.innerText = user.ptype;
    shiprateTd.innerText = user.srate;

    editBtn.innerText = "Edit";
    deleteBtn.innerText = "Delete";
    editBtn.addEventListener("click", () => {
      showUpdateForm(user.id);
    });
    deleteBtn.addEventListener("click", () => {
      deleteUser(user.id);
    });
    actionsTd.appendChild(editBtn);
    actionsTd.appendChild(deleteBtn);
    tr.appendChild(selectTd);
    tr.appendChild(idTd);
    tr.appendChild(pnameTd);
    tr.appendChild(ptitleTd);
    tr.appendChild(pdesTd);
    tr.appendChild(pvenTd);
    tr.appendChild(stockTd);
    tr.appendChild(bpriceTd);
    tr.appendChild(spriceTd);
    tr.appendChild(pquntTd);
    tr.appendChild(ptypeTd);
    tr.appendChild(shiprateTd);
    tr.appendChild(actionsTd);
    tableBody.appendChild(tr);
  }
}



function updateUser() {
  const pname = updateNameInput.value;
  const ptitle = updateTitleInput.value;
  const pdes = updateDesInput.value;
  const pven = updateVenInput.value;
  const pstock = updateStockInput.value;
  const bprice = updateBuypriceInput.value;
  const sprice = updateSalepriceInput.value;
  const pqunt = updatePurchasequntInput.value;
  const ptype = updateProducttypeInput.value;
  const srate = updateShiprateInput.value; 
  const index = users.findIndex((user) => user.id === currentUserId);
  // console.warn(index);
    if (index !== -1) {
      users[index].pname = pname;
      users[index].ptitle = ptitle;
      users[index].pdes = pdes;
      users[index].pven = pven;
      users[index].pstock = pstock;
      users[index].bprice = bprice;
      users[index].sprice = sprice;
      users[index].pqunt = pqunt;
      users[index].ptype = ptype;
      users[index].srate = srate;
      localStorage.setItem("users", JSON.stringify(users));
      hideUpdateForm();
      renderTable();
    }
 
}

function showUpdateForm(userId) {
  const user = users.find((user) => user.id === userId);
  // console.warn(user);
  if (user) {
    updateNameInput.value = user.pname;
    updateTitleInput.value = user.ptitle;
    updateDesInput.value = user.pdes;
    updateVenInput.value = user.pven;
    updateStockInput.value = user.pstock;
    updateBuypriceInput.value = user.bprice;
    updateSalepriceInput.value = user.sprice;
    updatePurchasequntInput.value = user.pqunt;
    updateProducttypeInput.value = user.ptype;
    updateShiprateInput.value = user.srate;
    currentUserId = user.id;
    updateBtn.addEventListener("click", updateUser);
    cancelBtn.addEventListener("click", hideUpdateForm);
    updateBtn.style.display = "inline-block";
    cancelBtn.style.display = "inline-block";
    updateNameInput.style.display = "inline-block";
    updateTitleInput.style.display = "inline-block";
    updateDesInput.style.display = "inline-block";
    updateVenInput.style.display = "inline-block";
    updateStockInput.style.display = "inline-block";
    updateBuypriceInput.style.display = "inline-block";
    updateSalepriceInput.style.display = "inline-block";
    updatePurchasequntInput.style.display = "inline-block";
    updateProducttypeInput.style.display = "inline-block";
    updateShiprateInput.style.display = "inline-block";
    document.getElementById("update-container").style.display = "block";
  }
}

function hideUpdateForm() {
  updateNameInput.value = "";
  updateTitleInput.value = "";
  updateDesInput.value = "";
  updateVenInput.value = "";
  updateStockInput.value = "";
  updateBuypriceInput.value = "";
  updateSalepriceInput.value = "";
  updatePurchasequntInput.value = "";
  updateProducttypeInput.value = "";
  updateShiprateInput.value = "";
  currentUserId = null;
  updateBtn.removeEventListener("click", updateUser);
  cancelBtn.removeEventListener("click", hideUpdateForm);
  updateBtn.style.display = "none";
  cancelBtn.style.display = "none";
  updateNameInput.style.display = "none";
  updateTitleInput.style.display = "none";
  updateDesInput.style.display = "none";
  updateVenInput.style.display = "none";
  updateStockInput.style.display = "none";
  updateBuypriceInput.style.display = "none";
  updateSalepriceInput.style.display = "none";
  updatePurchasequntInput.style.display = "none";
  updateProducttypeInput.style.display = "none";
  updateShiprateInput.style.display = "none";
  document.getElementById("update-container").style.display = "none";
}

function deleteUser(userId) {
  users = users.filter((user) => user.id !== userId);
  localStorage.setItem("users", JSON.stringify(users));
  if (users.length == 0) {
    hideUpdateForm();
  };
  renderTable();
}
const exportBtn = document.getElementById("export-btn");
exportBtn.addEventListener("click", exportSelectedData);

function exportSelectedData() {
  const selectedRows = document.querySelectorAll("#table-body input[type=checkbox]:checked");
  const exportedData = [];

  selectedRows.forEach((row) => {
    const userId = parseInt(row.parentElement.parentElement.querySelector("td:nth-child(2)").innerText);
    const selectedUser = users.find((user) => user.id === userId);
    if (selectedUser) {
      exportedData.push(selectedUser);
    }
  });

  // Convert the exported data to JSON string
  const jsonString = JSON.stringify(exportedData, null, 2);

  // Display or handle the JSON string as needed
  console.log(jsonString);
  // You can also use this JSON string for further processing or download

  // For example, if you want to download the JSON as a file
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "exported_data.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


// Event Listeners
//addBtn.addEventListener("click", addUser);

// Initialize table
renderTable();