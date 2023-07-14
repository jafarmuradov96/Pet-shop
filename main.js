const createBtn = document.querySelector('.create-btn');
const modalBtn = document.querySelector('.modal-btn');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const petType = document.getElementById('type-input');
const petCount = document.getElementById('count-input');
const petPrice = document.getElementById('price-input');
const stockPrice = document.getElementById('stock-price');
const dailySales = document.getElementById('daily-sales');
const tableRow = document.getElementById('table-row');


createBtn.addEventListener('click', function () {
    modal.style.display = 'inline';
});

closeModal.addEventListener('click', function () {
    modal.style.display = 'none'
});


const arrPets = [];
let stockPriceCount = 0;
let petId = 1;

const renderPets = function () {
    const tablePets = document.querySelector('.table-pets');

    let html = ` <tr>
                     <th>N:</th>
                     <th>Type</th>
                     <th>Count</th>
                     <th>Price</th>
                    <th>Action</th>
                 </tr>`;

    for (let item of arrPets) {
        html += ` <tr id ="table-row">
                    <td>${item.n}</td>
                    <td>${item.type}</td>
                    <td>${item.count}</td>
                    <td>${item.price}₼</td>
                    <td>
                        <button class="edit-btn" onclick="editRow('${item.type}')">
                            <?xml version="1.0" encoding="utf-8"?>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M21.1213 2.70705C19.9497 1.53548 18.0503 1.53547 16.8787 2.70705L15.1989 4.38685L7.29289 12.2928C7.16473 12.421 7.07382 12.5816 7.02986 12.7574L6.02986 16.7574C5.94466 17.0982 6.04451 17.4587 6.29289 17.707C6.54127 17.9554 6.90176 18.0553 7.24254 17.9701L11.2425 16.9701C11.4184 16.9261 11.5789 16.8352 11.7071 16.707L19.5556 8.85857L21.2929 7.12126C22.4645 5.94969 22.4645 4.05019 21.2929 2.87862L21.1213 2.70705ZM18.2929 4.12126C18.6834 3.73074 19.3166 3.73074 19.7071 4.12126L19.8787 4.29283C20.2692 4.68336 20.2692 5.31653 19.8787 5.70705L18.8622 6.72357L17.3068 5.10738L18.2929 4.12126ZM15.8923 6.52185L17.4477 8.13804L10.4888 15.097L8.37437 15.6256L8.90296 13.5112L15.8923 6.52185ZM4 7.99994C4 7.44766 4.44772 6.99994 5 6.99994H10C10.5523 6.99994 11 6.55223 11 5.99994C11 5.44766 10.5523 4.99994 10 4.99994H5C3.34315 4.99994 2 6.34309 2 7.99994V18.9999C2 20.6568 3.34315 21.9999 5 21.9999H16C17.6569 21.9999 19 20.6568 19 18.9999V13.9999C19 13.4477 18.5523 12.9999 18 12.9999C17.4477 12.9999 17 13.4477 17 13.9999V18.9999C17 19.5522 16.5523 19.9999 16 19.9999H5C4.44772 19.9999 4 19.5522 4 18.9999V7.99994Z"
                                    fill="blue" />
                            </svg>
                        </button>
                        <button class="delete-btn" onclick="deleteRow('${item.type}')">
                            <?xml version="1.0" encoding="utf-8"?>
                            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="red"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12V17" stroke="red" stroke-width="2" stroke-linecap="round"  stroke-linejoin="round" />     
                                <path d="M14 12V17" stroke="red" stroke-width="2" stroke-linecap="round"  stroke-linejoin="round" />                                   
                                <path d="M4 7H20" stroke="red" stroke-width="2" stroke-linecap="round"  stroke-linejoin="round" />                           
                                <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                                    stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />                     
                                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                                    stroke="red" stroke-width="2" stroke-linecap="round"  stroke-linejoin="round" />                
                            </svg>
                        </button>
                    </td>
              </tr>`
    }
    let stockPriceCount = 0;
    for (let item of arrPets) {
        stockPriceCount += item.count * item.price
        stockPrice.textContent = `${stockPriceCount}₼`;
    }
    tablePets.innerHTML = html;
}
renderPets();

modalBtn.addEventListener('click', function () {

    const objPets = {
        n: '',
        type: '',
        count: '',
        price: ''
    };

    objPets.n = petId++;
    objPets.type = petType.value;
    objPets.count = petCount.value;
    objPets.price = petPrice.value;

    const arrPets3 = [];
    const arrPets2 = Object.values(objPets);

    arrPets.forEach(element => {
        arrPets3.push(element.type);
    });
    if (arrPets2.includes('')) {
        alert('file is empty');

    } else if (!arrPets3.includes(objPets.type)) {
        arrPets.push(objPets);

    } else {
        for (let item of arrPets) {
            if (item.type === objPets.type) {
                item.count = parseInt(item.count) + parseInt(objPets.count)
                stockPriceCount += petCount.value * petPrice.value;
                stockPrice.textContent = `${stockPriceCount}₼`;
                petId--;
            }
        }
    }

    modal.style.display = 'none';
    petType.value = '';
    petCount.value = '';
    petPrice.value = '';
    renderPets();
    renderTypePet();
});

const selectPet = document.getElementById('pet-select')

const renderTypePet = function () {
    let html = `<option value="">--Please choose an pet--</option>`

    for (let item of arrPets) {
        html += `<option value="${item.type}">${item.type}</option>`
    }

    selectPet.innerHTML = html;
}
renderTypePet();


const arrCustomers = [];



const selectFullname = document.getElementById('fullname-select')

const renderFullname = function () {
    let html = `<option value="">--Please choose an fullname--</option>`

    for (let item of arrCustomers) {
        html += `<option value="${item.fullname}">${item.fullname}</option>`
    }

    selectFullname.innerHTML = html;
}
renderFullname();


const selectPhone = document.getElementById('phone-select')

const renderPhone = function () {
    let html = `<option value="">--Please choose an phone--</option>`

    for (let item of arrCustomers) {
        html += `<option value="${item.phone}">${item.phone}</option>`
    }

    selectPhone.innerHTML = html;
}
renderPhone();


const customerBtn = document.querySelector('.customer-btn');
const closeCustomerModal = document.querySelector('.close-modal-customer');
const modalCustomer = document.querySelector('.customer-modal');


customerBtn.addEventListener('click', function () {
    modalCustomer.style.display = 'inline';
});

closeCustomerModal.addEventListener('click', function () {
    modalCustomer.style.display = 'none';
});


const customersTable = document.querySelector('.customers-table');

const renderCustomers = function () {

    let html = ` <tr>
                    <th>N:</th>
                    <th>Fullname</th>
                    <th>+Phone</th>
                    <th>Total <br> Count</th>
                    <th>Total <br> Amount</th>
                 </tr>`

    for (let item of arrCustomers) {
        html += `<tr>
                    <td>${item.n}</td>
                    <td>${item.fullname}</td>
                    <td>${item.phone}</td>
                    <td>${item.totalCount}</td>
                    <td>${item.totalAmount}₼</td>
                </tr>`
    }
    customersTable.innerHTML = html;
};
renderCustomers();


const customerAddBtn = document.querySelector('.customer-add-btn');
const customerFullname = document.getElementById('fullname-customer');
const customerPhone = document.getElementById('phone-customer');

customerAddBtn.addEventListener('click', function () {

    const objCustomers = {
        n: '',
        fullname: '',
        phone: '',
        totalCount: '',
        totalAmount: ''
    }

    objCustomers.n = arrCustomers.length + 1;
    objCustomers.fullname = customerFullname.value;
    objCustomers.phone = customerPhone.value;
    objCustomers.totalCount = 0;
    objCustomers.totalAmount = 0;

    const arrCustomers2 = Object.values(objCustomers);

    const arrFullname = [];
    const arrPhone = [];

    for (let item of arrCustomers) {
        arrFullname.push(item.fullname)
        arrPhone.push(item.phone);
    }

    if (arrCustomers2.includes('')) {
        alert('file is empty')
        return

    } else if (arrCustomers.length === 0 || !arrFullname.includes(objCustomers.fullname) || !arrPhone.includes(objCustomers.phone)) {
        arrCustomers.push(objCustomers);

    }
    else {
        alert('such a customer is already registered')

    }
    modalCustomer.style.display = 'none';
    customerFullname.value = '';
    customerPhone.value = '';

    renderCustomers();
    renderFullname();
    renderPhone();

});


const listBtn = document.querySelector('.list-btn');
const closeOrderModal = document.querySelector('.close-order-modal');
const orderModal = document.querySelector('.order-modal');


listBtn.addEventListener('click', function () {
    orderModal.style.display = 'inline';
});

closeOrderModal.addEventListener('click', function () {
    orderModal.style.display = 'none';
});


let dailySalesCount = 0;
const arrOrderList = [];
const renderOrderList = function () {
    const listTable = document.querySelector('.list-table');

    let html = `<tr>
                    <th>N:</th>
                    <th>Fullname</th>
                    <th>Phone</th>
                    <th>Pet Type</th>
                    <th>Count</th>
                    <th>Price</th>
                    <th>Total <br> Price</th>
                </tr>`

    for (let item of arrOrderList) {
        html += `<tr>
                        <td>${item.n}</td>
                        <td>${item.fullname}</td>
                        <td>+${item.phone}</td>
                        <td>${item.petType}</td>
                        <td>${item.count}</td>
                        <td>${item.price}₼</td>
                        <td>${item.totalPrice}₼</td>
                    </tr> `
    }
    listTable.innerHTML = html;
};
renderOrderList();

const submitBtn = document.querySelector('.submit-btn');
const countCustomer = document.getElementById('count-user');
const pricePet = document.getElementById('price-pet');
submitBtn.addEventListener('click', function () {

    const orderObj = {
        n: '',
        fullname: '',
        phone: '',
        petType: '',
        count: '',
        price: '',
        totalPrice: ''
    };

    orderObj.n = arrOrderList.length + 1;
    orderObj.fullname = selectFullname.value;
    orderObj.phone = selectPhone.value;
    orderObj.petType = selectPet.value;
    orderObj.count = countCustomer.value;
    orderObj.price = pricePet.value;
    orderObj.totalPrice = orderObj.count * orderObj.price;

    const arrOrderList2 = Object.values(orderObj);

    if (arrOrderList2.includes('')) {
        alert('file is empty');
    };

    for (let element of arrPets) {

        if (parseInt(orderObj.count) > parseInt(element.count) || parseInt(orderObj.count) <= 0) {
            alert('it is impossible to perform such an operation');
            return;
        };

        for (let item of arrCustomers) {

            if (element.type === orderObj.petType && orderObj.fullname === item.fullname  && orderObj.phone === item.phone) {

                arrOrderList.push(orderObj);
                orderModal.style.display = 'none';
                dailySalesCount += orderObj.totalPrice;
                dailySales.textContent = `${dailySalesCount}₼`;
                item.totalCount = parseInt(item.totalCount) + 1;
                item.totalAmount = parseInt(item.totalAmount) + orderObj.totalPrice;
                element.count = parseInt(element.count) - parseInt(orderObj.count);
            }
            //  else {
            //     alert("error")
            //  }
        };
    };

    selectFullname.value = '';
    selectPhone.value = '';
    selectPet.value = '';
    pricePet.value = '';
    countCustomer.value = '';


    renderPets();
    renderCustomers();
    renderOrderList();
});

const editBtn = document.querySelector('.edit-btn');
const editType = document.getElementById('type-edit');
const editCount = document.getElementById('count-edit');
const editPrice = document.getElementById('price-edit');
const saveBtn = document.querySelector('.save-btn');
const modalEdit = document.querySelector('.modal-edit');
const closeModalEdit = document.querySelector('.close-modal-edit');

function editRow(type) {
    modalEdit.style.display = 'inline';

    for (let item of arrPets) {
        if (item.type === type) {
            editType.value = item.type;
            editCount.value = item.count;
            editPrice.value = item.price
        };

        saveBtn.addEventListener('click', function () {
            modalEdit.style.display = 'none';

            const objEdit = {
                type: '',
                count: '',
                price: ''
            };

            objEdit.type = editType.value;
            objEdit.count = editCount.value;
            objEdit.price = editPrice.value;

            if (item.type == objEdit.type) {
                item.count = objEdit.count;
                item.price = objEdit.price;
            };
            renderPets();
        });
    }
};

closeModalEdit.addEventListener('click', function () {
    modalEdit.style.display = 'none';
});

const deleteBtn = document.querySelector('.delete-btn');
function deleteRow(type) {
    if (confirm("Are you sure you want to delete?")) {
        arrPets.forEach((item) => {
            if (item.type === type) {
                arrPets.splice(arrPets.indexOf(item), 1);
            }
            if (arrPets.length === 0) {
                stockPrice.textContent = 0;
            }
        })
    };
    renderPets();
    renderTypePet();
};


