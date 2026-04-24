const products = [
{ name: "PVC Pipe", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/pipe.jpg" },
    { name: "PVC Elbows", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/Elbows.jpg" },
    { name: "PVC Tees", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/tee.jpg" },
{ name: "PVC Couplings", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/coupling.jpeg" },
{ name: "PVC End Caps", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/cap.jpg" },
    { name: "PVC Ball Valves", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/pvc ball volve.webp" },
{ name: "PVC Gate Valves", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/gatevalve.png" },
{ name: "PVC Bushes", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/bush.jpg" },
    { name: "Nail Clamp", sizes: ["Small", "Medium"], img: "images/Nail Clamp.jpg" },
{ name: "PVC Unions", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/union.jpg" },
{ name: "PVC Adapters", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/adapter.jpg" },
    { name: "PVC Cross Fittings", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/Cross Fittings.jpg" },
    { name: "PVC Swing Check Valves", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/Swing Check Valves.webp" },
    { name: "PVC Threaded Fittings", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/Threaded Fittings.jpg" },
    { name: "Threaded End Cap", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/Threaded end cap.jpg" },
    { name: "Threaded Elbow Brass", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/Threaded Elbow Brass.webp" },
    { name: "PVC Brass MTA/FTA", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/Pvc Brass MtaFta.webp" },
    { name: "PVC MTA", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/pvc mta.png" },
    { name: "PVC Threaded Tee Brass", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/PVC Threaded Tee Brass.webp" },
    { name: "C-Clamp", sizes: ["Small", "Medium"], img: "images/C-clamp.webp" },
    { name: "Hose Clamp", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/Hose Clamp.png" }
];

let bill = [];

function displayProducts(filteredProducts = products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = "";

    filteredProducts.forEach((p, index) => {
        productList.innerHTML += `
        <div class="card">
            <img src="${p.img || 'https://via.placeholder.com/80x80/6f42c1/ffffff?text=' + p.name.slice(0,8)}">
            <h4>${p.name}</h4>

            <select id="size-${index}">
                ${p.sizes.map(size => `<option>${size}</option>`).join("")}
            </select>

            <input type="number" id="price-${index}" placeholder="Amount (₹) - Recommended">

            <button onclick="addToBill(${index})">Add</button>
        </div>
        `;
    });
}

function addCustomItem() {
    const name = document.getElementById('customName').value.trim();
    const size = document.getElementById('customSize').value.trim();
    let amount = parseFloat(document.getElementById('customAmount').value);

    if (!name) {
        alert('Enter item name!');
        return;
    }

    if (isNaN(amount) || amount <= 0) {
        amount = 0;
    }

    const displayName = size ? `${name} (${size})` : name;

    let item = bill.find(i => i.name === displayName);

    if (item) {
        item.qty++;
    } else {
        bill.push({ name: displayName, price: amount, qty: 1 });
    }

    updateBill();

    document.getElementById('customName').value = '';
    document.getElementById('customSize').value = '';
    document.getElementById('customAmount').value = '';
}

function addToBill(index) {
    // Find full product data using name match since index may change with filtering
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm));
    const product = filteredProducts[index];
    if (!product) return;

    let size = document.getElementById(`size-${index}`).value;
    let price = parseFloat(document.getElementById(`price-${index}`).value);

    if (!price || price <= 0) {
        price = 0;
    }

    let name = product.name + " (" + size + ")";

    let item = bill.find(i => i.name === name);

    if (item) {
        item.qty++;
    } else {
        bill.push({ name, price, qty: 1 });
    }

    updateBill();
}

function updateBill() {
    const billItems = document.getElementById("billItems");
    billItems.innerHTML = "";

    let subtotal = 0;

    bill.forEach((item, idx) => {
        let total = item.price * item.qty;
        subtotal += total;

        billItems.innerHTML += `
        <li>
            <span>${item.name} x${item.qty}</span>
            <span>₹${total} <button class="remove-btn" data-index="${idx}">✕</button></span>
        </li>
        `;
    });

    // Attach click listeners to remove buttons
    document.querySelectorAll('.remove-btn').forEach(btn => {
        btn.onclick = function() {
            const index = parseInt(this.getAttribute('data-index'));
            bill.splice(index, 1);
            updateBill();
        };
    });

    let total = subtotal;

    document.getElementById("total").innerText = total.toLocaleString();
}

function checkout() {
    if (bill.length === 0) {
        alert("Bill is empty!");
        return;
    }
    
    const clientName = document.getElementById('clientName').value.trim();
    if (!clientName) {
        alert("Please enter client name!");
        return;
    }
    
    const checkoutData = {
        bill: bill,
        clientName: clientName
    };
    
    sessionStorage.setItem('checkoutBill', JSON.stringify(checkoutData));
    window.open('invoice.html', '_blank');
    bill = [];
    updateBill();
}

// Search functionality
document.getElementById('search').addEventListener('input', function() {
    const term = this.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    displayProducts(filtered);
});

displayProducts();
