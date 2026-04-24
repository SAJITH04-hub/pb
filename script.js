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
    { name: "PVC Solvent", sizes: ["50ml", "100ml", "250ml", "500ml", "1L"], img: "images/pvc solvent.png" },
    { name: "PVC Threaded Fittings", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/Threaded Fittings.jpg" },
    { name: "Threaded End Cap", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/Threaded end cap.jpg" },
    { name: "Threaded Elbow Brass", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/Threaded Elbow Brass.webp" },
    { name: "PVC Brass MTA/FTA", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/Pvc Brass MtaFta.webp" },
    { name: "PVC MTA", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/pvc mta.png" },
    { name: "PVC Threaded Tee Brass", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/PVC Threaded Tee Brass.webp" },
    { name: "C-Clamp", sizes: ["Small", "Medium"], img: "images/C-clamp.webp" },
    { name: "Hose Clamp", sizes: ["1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "4\"", "6\""], img: "images/Hose Clamp.png" }
];

const electricalProducts = [
    { name: "Switch", img: "images/Switch.png" },
    { name: "Socket", img: "images/socket.png" },
    { name: "Dimmer", img: "images/dimmer.png" },
    { name: "Regulator", img: "images/Regulator.png" },
    { name: "Indicator", img: "images/Indicator.png" },
    { name: "Fuse", img: "images/fuse.png" },
    { name: "DP Switches", img: "images/DP Switches.png" },
    { name: "Gang Box", img: "images/gang box.png" },
    { name: "Switchboard", img: "images/Switchboard.png" },
    { name: "Junction Box", img: "images/junction box.png" },
    { name: "Surface Box", img: "images/surface box.png" },
    { name: "Concealed Box", img: "images/Concealed Box.png" },
    { name: "Concealed Board", img: "images/Concealed Board.png" },
    { name: "MCB", img: "images/mcb.png" },
    { name: "RCCB", img: "images/rccb.png" },
    { name: "Isolator", img: "images/isolator.png" },
    { name: "Mini MCB", img: "images/mini mcb.png" },
    { name: "MCB COs", img: "images/mcb cos.png" },
    { name: "MCB Enclosure", img: "images/mcb encloser.png" },
    { name: "Porcelain Fuse", img: "images/porcelain fuse.png" },
    { name: "Distribution Board", img: "images/distribution board.png" },
    { name: "AC Box", img: "images/ac box.png" },
    { name: "Bulb Holder", img: "images/bulb holder.png" },
    { name: "Capacitor", img: "images/capacitor.png" },
    { name: "Extension Box", img: "images/extension box.png" },
    { name: "Foot Light", img: "images/foot light.png" },
    { name: "Plug Top", img: "images/plug top.png" },
    { name: "Multiplug", img: "images/Multiplug.png" },
    { name: "Spike Guard", img: "images/Spike Guard.png" },
    { name: "PVC Tape", img: "images/pvc tap.png" },
    { name: "Cable Tie", img: "images/cable tie.png" },
    { name: "Wall Plug", img: "images/wall plug.png" },
    { name: "Wire Clip", img: "images/wire clip.png" },
    { name: "Round Cover Plate", img: "images/Round Cover Plate.png" },
    { name: "Twin Wire", img: "images/twin wire.png", meter: true },
    { name: "Pannel Turking", img: "images/pannel turking.png", meter: true },
    { name: "Fan Box", img: "images/fan box.png" },
    { name: "Casing Capping", img: "images/casing capping.png", meter: true }
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

function displayElectricalProducts(filteredElec = electricalProducts) {
    const elecList = document.getElementById("electricalList");
    elecList.innerHTML = "";

    filteredElec.forEach((p, index) => {
        const meterInput = p.meter ? `<input type="number" id="elec-meter-${index}" placeholder="Meters" style="margin-bottom:6px;">` : '';
        elecList.innerHTML += `
        <div class="card">
            <img src="${p.img || 'https://via.placeholder.com/80x80/ff9800/ffffff?text=' + p.name.slice(0,8)}">
            <h4>${p.name}</h4>

            ${meterInput}
            <input type="number" id="elec-price-${index}" placeholder="Amount (₹) - Recommended">

            <button onclick="addElectricalToBill(${index})">Add</button>
        </div>
        `;
    });
}

function addElectricalToBill(index) {
    const searchTerm = document.getElementById('elecSearch').value.toLowerCase();
    const filteredElec = electricalProducts.filter(p => p.name.toLowerCase().includes(searchTerm));
    const product = filteredElec[index];
    if (!product) return;

    let price = parseFloat(document.getElementById('elec-price-' + index).value);

    if (!price || price <= 0) {
        price = 0;
    }

    let name = product.name;

    if (product.meter) {
        const meterVal = parseFloat(document.getElementById('elec-meter-' + index).value);
        if (meterVal && meterVal > 0) {
            name = product.name + ' (' + meterVal + 'm)';
        }
    }

    let item = bill.find(i => i.name === name);

    if (item) {
        item.qty++;
    } else {
        bill.push({ name: name, price: price, qty: 1 });
    }

    updateBill();
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

document.getElementById('elecSearch').addEventListener('input', function() {
    const term = this.value.toLowerCase();
    const filtered = electricalProducts.filter(p => p.name.toLowerCase().includes(term));
    displayElectricalProducts(filtered);
});

displayProducts();
displayElectricalProducts();
