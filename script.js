// Update this number (country code included, with no + sign) for WhatsApp orders.
const WHATSAPP_NUMBER = '8801829952213';
const CART_STORAGE_KEY = 'rahiFashionZoneCart';
const WISHLIST_STORAGE_KEY = 'rahiFashionZoneWishlist';

// Product details are kept in one catalog and reused by every shop view.
const products = [
    //T-shirt zone

	{ id: 'T-shirt-1', name: 'Stylish New Polo Shirt', category: 'T-Shirts', audience: 'Men', price: 350, oldPrice: 500, rating: 4.9, reviews: 12, image: 'T-shirt/t1.jpeg', isNew: true, created: 12, colors: [{ name: 'Cloud', hex: '#e6e3dd' }, { name: 'Black', hex: '#242424' }, { name: 'Sage', hex: '#89917d' }], description: `Stylish New Polo Shirt

			Main Material: Cotton<br>
			Fabrics: PK Cotton<br>
			Premium Quality<br>
			Fabrication: 200(10+-)GSM<br>
			Sleeve: Half Sleeve<br>
			100% Export Quality Sewing<br>
			Size- M, L, XL<br>
			M - Length 28 Chest 38<br>
			L - Length 29 Chest: 40<br>
			XL - Length 30 Chest 42` },

    { id: 'T-shirt-2', name: 'Stylish New Polo Shirt', category: 'T-Shirts', audience: 'Men', price: 350, oldPrice: 500, rating: 4.9, reviews: 18, image: 'T-shirt/t2.jpeg', isNew: true, created: 12, colors: [{ name: 'Cloud', hex: '#e6e3dd' }, { name: 'Black', hex: '#242424' }, { name: 'Sage', hex: '#89917d' }], description: `

				Product Type: Polo Shirt<br>
				Main Material: Cotton<br>
				Fabrics: PK Cotton<br>
				Premium Quality<br>
				Fabrication: 200(10+-)GSM<br>
				Sleeve: Half Sleeve<br>
				100% Export Quality Sewing
` },

    { id: 'T-shirt-3', name: 'Premium Cotton Drop Shoulder Tshirt', category: 'T-Shirts', audience: 'Men', price: 499, oldPrice: 999, rating: 4.9, reviews: 15, image: 'T-shirt/t3.jpeg', isNew: true, created: 12, colors: [{ name: 'Cloud', hex: '#e6e3dd' }, { name: 'Black', hex: '#242424' }, { name: 'Sage', hex: '#89917d' }], description: `
		Fabric: 100% Cotton<br>
		Quality: Premium Quality Fabric<br>
		Print Type: DTF<br>
		GSM: 200–230<br>
		Fit: Drop Shoulder<br>
		SIZE GUIDE (IN INCHES) <br>
		M — Chest 42" | Length 27"<br>
		L — Chest 44" | Length 28"<br>
		XL — Chest 46" | Length 29"<br>
		XXL — Chest 48" | Length 30"` },

    { id: 'T-shirt-4', name: 'Premium Cotton Drop Shoulder Tshirt', category: 'T-Shirts', audience: 'Men', price: 499, oldPrice: 999, rating: 4.9, reviews: 28, image: 'T-shirt/t4.jpeg', isNew: true, created: 12, colors: [{ name: 'Cloud', hex: '#e6e3dd' }, { name: 'Black', hex: '#242424' }, { name: 'Sage', hex: '#89917d' }], description: `
		Fabric: 100% Cotton<br>
		Quality: Premium Quality Fabric<br>
		Print Type: DTF<br>
		GSM: 200–230<br>
		Fit: Drop Shoulder<br>
		SIZE GUIDE (IN INCHES) <br>
		M — Chest 42" | Length 27"<br>
		L — Chest 44" | Length 28"<br>
		XL — Chest 46" | Length 29"<br>
		XXL — Chest 48" | Length 30"` },

    { id: 'T-shirt-5', name: 'Viral Old Money Polo', category: 'T-Shirts', audience: 'Men', price: 350, oldPrice: 599, rating: 4.9, reviews: 10, image: 'T-shirt/t5.jpeg', isNew: true, created: 12, colors: [{ name: 'Cloud', hex: '#e6e3dd' }, { name: 'Black', hex: '#242424' }, { name: 'Sage', hex: '#89917d' }], description: `- Premium Cherry Ribbed Cotton Fabric
			- 250+ GSM Heavy Quality Fabric<br>
			- Soft & Comfortable Feel<br>
			- Premium Finishing<br>
			- Long Lasting & Durable Quality<br>
			- Available Size: M, L, XL, XXL` },

    { id: 'T-shirt-6', name: 'Stylish New Polo Shirt', category: 'T-Shirts', audience: 'Men', price: 350, oldPrice: 599, rating: 4.9, reviews: 128, image: 'T-shirt/t6.jpeg', isNew: true, created: 12, colors: [{ name: 'Cloud', hex: '#e6e3dd' }, { name: 'Black', hex: '#242424' }, { name: 'Sage', hex: '#89917d' }], description: `Product Type: Polo Shirt
				Main Material: Cotton<br>
				Fabrics: PK Cotton<br>
				Premium Quality<br>
				Fabrication: 200(10+-)GSM<br>
				Sleeve: Half Sleeve<br>
				100% Export Quality Sewing` },

    { id: 'womens-tee', name: "Cotton Printed T-Shirt", category: 'T-Shirts', audience: 'Men', price: 310, oldPrice: 600, rating: 4.8, reviews: 93, image: 'T-shirt/t7.jpeg', isNew: true, created: 7, colors: [{ name: 'White', hex: '#f4f1e8' }, { name: 'Rose', hex: '#c99a91' }, { name: 'Black', hex: '#242424' }], description: `
						👉১০০% কটন ফেব্রিক্স<br>
						👉পারফেক্ট সাইজ মেজারমেন্ট<br>
						👉 আকর্ষণীয় ডিজাইন<br>
						👉 সফট,ও আরামদায়ক<br>
						👉 ১৬০-১৮০ GSM ফেব্রিক্স<br>
						👉হাই-কোয়ালিটি DTF প্রিন্ট` },

 //shirt zone

	{ id: 'shirt-1', name: 'Premium Solid Stitch Full Sleeve Shirt', category: 'Shirts', audience: 'Men', price: 599, oldPrice: null, rating: 4.8, reviews: 18, image: 'shirt/shirt1.jpeg', isNew: false, created: 11, colors: [{ name: 'White', hex: '#f4f1e8' }, { name: 'Blue', hex: '#8ea7bb' }], description: `নরম ও আরামদায়ক প্রিমিয়াম চায়না ভাংচুর ফেব্রিক্সের তৈরি ফুল হাতা শার্ট।
						স্টাইলিশ টেক্সচার ডিজাইন ও সুন্দর ফিটিংয়ে আপনাকে দিবে দারুন স্টাইলইশ লুক।<br>

						📌 Product Details:<br>
						✅ প্রিমিয়াম কোয়ালিটি<br>
						✅ সফট চায়না ভাংচুর ফেব্রিক্স<br>
						✅ স্টাইলিশ টেক্সচার ডিজাইন<br>
						✅ আরামদায়ক ফিটিং<br>
						✅ দৈনন্দিন ব্যবহারের জন্য উপযোগী` },

	{ id: 'shirt-2', name: 'Premium Solid Stitch Full Sleeve Shirt', category: 'Shirts', audience: 'Men', price: 599, oldPrice: null, rating: 4.8, reviews: 16, image: 'shirt/shirt2.jpeg', isNew: false, created: 11, colors: [{ name: 'White', hex: '#f4f1e8' }, { name: 'Blue', hex: '#8ea7bb' }], description: `নরম ও আরামদায়ক প্রিমিয়াম চায়না ভাংচুর ফেব্রিক্সের তৈরি ফুল হাতা শার্ট।
						স্টাইলিশ টেক্সচার ডিজাইন ও সুন্দর ফিটিংয়ে আপনাকে দিবে দারুন স্টাইলইশ লুক।<br>

						📌 Product Details:<br>
						✅ প্রিমিয়াম কোয়ালিটি<br>
						✅ সফট চায়না ভাংচুর ফেব্রিক্স<br>
						✅ স্টাইলিশ টেক্সচার ডিজাইন<br>
						✅ আরামদায়ক ফিটিং<br>
						✅ দৈনন্দিন ব্যবহারের জন্য উপযোগী` },

	{ id: 'shirt-3', name: 'Premium Oxford Cotton Solid Black Shirt', category: 'Shirts', audience: 'Men', price: 499, oldPrice: null, rating: 4.8, reviews: 26, image: 'shirt/shirt3.jpeg', isNew: false, created: 11, colors: [{ name: 'White', hex: '#f4f1e8' }, { name: 'Blue', hex: '#8ea7bb' }], description: `প্রিমিয়াম অক্সফোর্ড কটন ফেব্রিক্সের ব্যান কলার ফুল হাতা শার্ট।
							গরমে স্টাইল আর কমফোর্ট—দুটোই একসাথে!<br>

							👕 Product Details:<br>
							✔️ Fabrics: 100% Oxford Cotton (Soft & Breathable)<br>
							✔️ Quality: Export Quality Stitching & Finishing<br>
							✔️ Sleeve: Long Sleave<br>
							✔️ Fit: Slim Fit (Smart Look)<br>
							✔️ Color & Quality: 100% Guaranteed<br>
							✔️ Comfortable for Every Season` },

	{ id: 'shirt-4', name: 'Formal Official Cotton Shirt', category: 'Shirts', audience: 'Men', price: 599, oldPrice: null, rating: 4.8, reviews: 20, image: 'shirt/shirt4.jpeg', isNew: false, created: 11, colors: [{ name: 'White', hex: '#f4f1e8' }, { name: 'Blue', hex: '#8ea7bb' }], description: `Premium White Pinstripe Long Sleeve<br>
							Fabric: Oxford Cotton<br>
							Export Quality <br>
							Fabric details:<br>
							Material: Oxford Cotton<br>
							Quality: 100% Premium<br>
							Very comfortable & high-quality Fabric<br>
							Color and Wash Granted` },

	{ id: 'shirt-5', name: 'Premium Oxford Cotton Solid Shirt', category: 'Shirts', audience: 'Men', price: 499, oldPrice: null, rating: 4.8, reviews: 39, image: 'shirt/shirt5.jpeg', isNew: false, created: 11, colors: [{ name: 'White', hex: '#f4f1e8' }, { name: 'Blue', hex: '#8ea7bb' }], description: `প্রিমিয়াম অক্সফোর্ড কটন ফেব্রিক্সের ব্যান কলার ফুল হাতা শার্ট।
							গরমে স্টাইল আর কমফোর্ট—দুটোই একসাথে!<br>

							👕 Product Details:<br>
							✔️ Fabrics: 100% Oxford Cotton (Soft & Breathable)<br>
							✔️ Quality: Export Quality Stitching & Finishing<br>
							✔️ Sleeve: Long Sleave<br>
							✔️ Fit: Slim Fit (Smart Look)<br>
							✔️ Color & Quality: 100% Guaranteed<br>
							✔️ Comfortable for Every Season` },

 //pant zone   

	{ id: 'pant-1', name: 'Black Cargo Stripe Sweatpants Joggers', category: 'Pants', audience: 'Men', price: 450, oldPrice: 1950, rating: 4.7, reviews: 74, image: 'pant/pant1.jpg', isNew: false, created: 10, colors: [{ name: 'Indigo', hex: '#263c56' }, { name: 'Washed black', hex: '#555451' }], description: `Fabric: Microfiber/ China suit<br>
							Type : China suit Skinny Rib Trouser<br>
							Fabric : Cotton 70%+ 30% polyester<br>
							Type : Trouser<br>
							GSM: 220+<br>
							Main Material: Cotton 70%+30% polyester<br>
							Export Quality Sweing` },

	{ id: 'pant-2', name: 'Premium Chinese Dubai Fabric Trousers', category: 'Pants', audience: 'Men', price: 799, oldPrice: 1950, rating: 4.7, reviews: 74, image: 'pant/pant2.jpeg', isNew: false, created: 10, colors: [{ name: 'Indigo', hex: '#263c56' }, { name: 'Washed black', hex: '#555451' }], description: `100% Premium Trouser.<br>
							Fabrics: Chinese Dooby fabric.<br>
							Accurate Size Measurement.<br>
							Available Size: M, L, XL, XXL` },							

	{ id: 'pant-3', name: 'Premium Chinese Dubai Fabric Trousers', category: 'Pants', audience: 'Men', price: 799, oldPrice: 1950, rating: 4.7, reviews: 74, image: 'pant/pant3.jpeg', isNew: false, created: 10, colors: [{ name: 'Indigo', hex: '#263c56' }, { name: 'Washed black', hex: '#555451' }], description: `100% Premium Trouser.<br>
							Fabrics: Chinese Dooby fabric.<br>
							Accurate Size Measurement.<br>
							Available Size: M, L, XL, XXL` },							


		{ id: 'pant-4', name: 'BAGGY TROUSER', category: 'Pants', audience: 'Men', price: 550, oldPrice: null, rating: 4.6, reviews: 48, image: 'pant/pant4.jpeg', isNew: false, created: 4, colors: [{ name: 'Olive', hex: '#69725a' }, { name: 'Sand', hex: '#c8b79e' }], description: `Premium Quality | 100% Cotton Fabric<br>
							Fabric: 100% Cotton<br>
							Soft & Comfortable <br>
							Breathable Fabric <br>
							Premium Quality<br>
							Perfect for Everyday Wear` },							



	
//panjabi zone

		{ id: 'panjabi-l', name: 'Luxury Italian Panjabi with Box', category: 'Punjabi', audience: 'Men', price:1700 , oldPrice: 2200, rating: 4.6, reviews: 7, image: 'panjabi/panjabi1.jpeg', isNew: true, created: 6, colors: [{ name: 'Black', hex: '#242424' }, { name: 'Terracotta', hex: '#a8624d' }], description: `🔥লাক্সারি ডিজাইনের অরিজিনাল লা-ইতালিয়ান কটন ফেব্রিক্সে কমপ্লেক্স এমব্রয়ডারির কাজ করা সুপার প্রিমিয়াম পাঞ্জাবি🔥<br>

				ফেব্রিক্সঃ পাকিস্তানি লাক্সারি লা-ইতালিয়ান কটন।<br>
				ডিজাইনঃ কমপ্লেক্স এমব্রয়ডারির কাজ করা।<br>
				বাটুনঃ প্রিমিয়াম ম্যাচিং স্নাপ বাটুন।<br>
				কোয়ালিটিঃ ১০০% এক্সপোর্ট কোয়ালিটি সুইং।<br>
				সাইজঃ বডি সাইজ ৪০ থেকে ৪৮ পর্যন্ত।` },


	
	{ id: 'panjabi-2', name: 'Luxury Original Pakistani Panjabi', category: 'Punjabi', audience: 'Men', price:1999 , oldPrice: 2500, rating: 4.8, reviews: 10, image: 'panjabi/panjabi2.jpeg', isNew: true, created: 6, colors: [{ name: 'Black', hex: '#242424' }, { name: 'Terracotta', hex: '#a8624d' }], description:  `🔥লাক্সারি ডিজাইনের অরিজিনাল পাকিস্তানি জ্যাকওয়ার্ড কটন ফেব্রিক্সে   কমপ্লেক্স এমব্রয়ডারির কাজ করা সুপার প্রিমিয়াম পাঞ্জাবি🔥<br>

					ফেব্রিক্সঃ পাকিস্তানি লাক্সারি জ্যাকওয়ার্ড কটন।<br>
					ডিজাইনঃ কমপ্লেক্স এমব্রয়ডারির কাজ করা।<br>
					বাটুনঃ প্রিমিয়াম ম্যাচিং স্নাপ বাটুন।<br>
					কোয়ালিটিঃ ১০০% এক্সপোর্ট কোয়ালিটি সুইং।<br>
					সাইজঃ বডি সাইজ ৪০ থেকে ৪৮ পর্যন্ত।<br>
					প্রত্যেকটা পাঞ্জাবির সাথে থাকবে বক্স।`},



	
	{ id: 'panjabi-3', name: 'Premium Cotton Print Panjabi', category: 'Punjabi', audience: 'Men', price:1200 , oldPrice: 2000, rating: 4.7, reviews: 8, image: 'panjabi/panjabi3.jpeg', isNew: true, created: 6, colors: [{ name: 'Black', hex: '#242424' }, { name: 'Terracotta', hex: '#a8624d' }], description: `ফেব্রিক্সঃ ১০০% উন্নত মানের সুতি।<br>
								খুবই সফট এবং প্রিমিয়াম কোয়ালিটির পাঞ্জাবি।<br>
								বডিতে প্রিন্টের কাজ করা` },


	



///accessorise 

	


	{ id: 'bag-1', name: 'Trendy black student backpack', category: 'Accessories', audience: 'Accessories', price: 1100, oldPrice:1500 , rating: 4.8, reviews: 25, image: 'accessorise/bag1.jpeg', isNew: false, created: 2, colors: [{ name: 'Tan', hex: '#a87850' }, { name: 'Black', hex: '#242424' }], description: `Student Backpack

						For High School And Primary School<br>
						Student Versatile Backpack Schoolbag with doll` },

	{ id: 'bag-2', name: 'Trendy black student backpack', category: 'Accessories', audience: 'Accessories', price: 1100, oldPrice:1500 , rating: 4.8, reviews: 35, image: 'accessorise/bag2.jpeg', isNew: false, created: 2, colors: [{ name: 'Tan', hex: '#a87850' }, { name: 'Black', hex: '#242424' }], description: `Student Backpack

						For High School And Primary School<br>
						Student Versatile Backpack Schoolbag with doll` },

];


// Category cards use the same filter values as the product filter buttons.
const categories = [
	{ title: "Men's Fashion", filter: 'Men', image:'men/men1.jpg', position: 'center 30%' },

	{ title: "Women's Fashion", filter: 'Women', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=650&q=80', position: 'center 35%' },

	{ title: 'T-Shirts', filter: 'T-Shirts', image: 'T-shirt/t3.jpeg' },

	{ title: 'Shirts', filter: 'Shirts', image: 'shirt/shirt2.jpeg' },

	{ title: 'Pants', filter: 'Pants', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=650&q=80' },

	{ title: 'Hoodies', filter: 'Hoodies', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=650&q=80' },

	{ title: 'Punjabi', filter: 'Punjabi', image: 'men/panjabi.png' },

	{ title: 'Accessories', filter: 'Accessories', image: 'men/accessoris.jpg' }
];

const filterOptions = ['All', 'Men', 'Women', 'T-Shirts', 'Shirts', 'Pants', 'Punjabi', 'Hoodies', 'Accessories'];
const productGrid = document.querySelector('#productGrid');
const filterRow = document.querySelector('#filterRow');
const searchInput = document.querySelector('#searchInput');
const searchPanel = document.querySelector('#searchPanel');
const cartDrawer = document.querySelector('#cartDrawer');
const quickViewDialog = document.querySelector('#quickViewDialog');

// Keep the current view and shopping state in memory while the page is open.
let activeFilter = 'All';
let saleOnly = false;
let toastTimeout;
let cart = loadStoredArray(CART_STORAGE_KEY).filter((item) => products.some((product) => product.id === item.id));
let wishlist = loadStoredArray(WISHLIST_STORAGE_KEY);

function loadStoredArray(key) {
	// Ignore missing or invalid localStorage data and start with an empty list.
	try {
		const stored = JSON.parse(localStorage.getItem(key) || '[]');
		return Array.isArray(stored) ? stored : [];
	} catch {
		return [];
	}
}

function formatPrice(price) {
	return `৳${price.toLocaleString('en-BD')}`;
}

function renderCategories() {
	// Build category cards from data so imagery and filters stay easy to edit.
	document.querySelector('#categoryGrid').innerHTML = categories.map((category) => `
		<article class="category-card">
			<img src="${category.image}" alt="${category.title} collection" loading="lazy" style="object-position:${category.position || 'center'}">
			<div class="category-card-content"><h3>${category.title}</h3><a href="#products" data-filter="${category.filter}">Shop now ↗</a></div>
		</article>`).join('');
}

function renderFilters() {
	filterRow.innerHTML = filterOptions.map((filter) => `
		<button class="filter-button${activeFilter === filter ? ' active' : ''}" type="button" data-filter="${filter}" aria-pressed="${activeFilter === filter}">${filter}</button>`).join('');
}

function visibleProducts() {
	const query = searchInput.value.trim().toLocaleLowerCase();
	let shown = products.filter((product) => {
		const matchesFilter = activeFilter === 'All' || product.audience === activeFilter || product.category === activeFilter;
		const matchesSearch = !query || `${product.name} ${product.category} ${product.audience}`.toLocaleLowerCase().includes(query);
		return matchesFilter && matchesSearch && (!saleOnly || product.oldPrice);
	});

	const sort = document.querySelector('#sortSelect').value;
	// Apply sorting after filtering so it affects only the visible products.
	if (sort === 'low') shown.sort((first, second) => first.price - second.price);
	if (sort === 'high') shown.sort((first, second) => second.price - first.price);
	if (sort === 'newest') shown.sort((first, second) => second.created - first.created);
	return shown;
}

function renderProducts() {
	const shown = visibleProducts();
	// No products found
	if (shown.length === 0) {
		productGrid.innerHTML = `
			<div class="empty-products">
				<h3>Products Coming Soon 🛍️</h3>
				<p>We're preparing something special for you. Check back soon!</p>
			</div>
		`;

		document.querySelector('#resultCount').textContent = '0 pieces';
		document.querySelector('#emptyState').hidden = true;

		return;
	}

	// Show products
	productGrid.innerHTML = shown.map((product, index) => `
		<article class="product-card" style="animation-delay:${Math.min(index * 35, 210)}ms">
			<div class="product-image-wrap">
				<img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">

				${product.oldPrice
					? '<span class="product-badge sale-badge">SALE</span>'
					: product.isNew
						? '<span class="product-badge">NEW</span>'
						: ''
				}

				<button
					class="wishlist-button${wishlist.includes(product.id) ? ' is-loved' : ''}"
					type="button"
					data-wishlist="${product.id}"
					aria-label="${wishlist.includes(product.id) ? 'Remove from' : 'Add to'} wishlist"
					aria-pressed="${wishlist.includes(product.id)}"
				>
					${wishlist.includes(product.id) ? '♥' : '♡'}
				</button>

				<button
					class="quick-view-button"
					type="button"
					data-quick-view="${product.id}"
				>
					Quick view
				</button>
			</div>

			<div class="product-info">
				<p class="product-category">
					${product.audience} · ${product.category}
				</p>

				<h3 class="product-name">${product.name}</h3>

				<p class="product-rating" aria-label="${product.rating} out of 5 stars">
					★★★★★ <span>${product.rating} (${product.reviews})</span>
				</p>

				<p class="product-price">
					${formatPrice(product.price)}
					${product.oldPrice
						? `<span class="old-price">${formatPrice(product.oldPrice)}</span>`
						: ''
					}
				</p>

				<div class="product-actions">
					<button
						class="add-cart-button"
						type="button"
						data-add-cart="${product.id}"
					>
						Add to bag
					</button>

					<button
						class="whatsapp-button"
						type="button"
						data-whatsapp="${product.id}"
						aria-label="Order ${product.name} on WhatsApp"
						title="Order on WhatsApp"
					>
						◉
					</button>
				</div>
			</div>
		</article>
	`).join('');

	document.querySelector('#resultCount').textContent =
		`${shown.length} ${shown.length === 1 ? 'piece' : 'pieces'}${saleOnly ? ' on sale' : ''}`;

	document.querySelector('#emptyState').hidden = true;

}

function updateProducts() {
	renderFilters();
	renderProducts();
}

function showToast(message) {
	const toast = document.querySelector('#toast');
	toast.textContent = message;
	toast.classList.add('is-visible');
	window.clearTimeout(toastTimeout);
	toastTimeout = window.setTimeout(() => toast.classList.remove('is-visible'), 2300);
}

function saveCart() {
	// Persist every cart change, then refresh the drawer and count together.
	localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
	renderCart();
}

function addToCart(productId, size = 'M', color = 'Default', quantity = 1) {
	const product = products.find((item) => item.id === productId);
	if (!product) return;
	const existing = cart.find((item) => item.id === productId && item.size === size && item.color === color);
	if (existing) existing.quantity += quantity;
	else cart.push({ id: productId, size, color, quantity });
	saveCart();
	showToast(`${product.name} added to your bag`);
}

function cartItemCount() {
	return cart.reduce((total, item) => total + item.quantity, 0);
}

function createWhatsAppUrl(message) {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function renderCart() {
	const itemCount = cartItemCount();
	const cartItems = document.querySelector('#cartItems');
	document.querySelector('#cartCount').textContent = itemCount > 99 ? '99+' : itemCount;
	document.querySelector('#drawerItemCount').textContent = `(${itemCount})`;
	document.querySelector('#cartSubtotal').textContent = formatPrice(cart.reduce((total, item) => {
		const product = products.find((entry) => entry.id === item.id);
		return total + (product ? product.price * item.quantity : 0);
	}, 0));
	document.querySelector('#cartEmpty').hidden = itemCount > 0;
	document.querySelector('#cartFooter').hidden = itemCount === 0;
	cartItems.innerHTML = cart.map((item) => {
		const product = products.find((entry) => entry.id === item.id);
		if (!product) return '';
		return `<article class="cart-line">
			<img src="${product.image}" alt="${product.name}" loading="lazy">
			<div class="cart-line-info"><h3>${product.name}</h3><p>${item.color}${item.size !== 'One size' ? ` · ${item.size}` : ''}</p><div class="quantity-control"><button type="button" data-quantity="-1" data-id="${item.id}" data-size="${item.size}" data-color="${item.color}" aria-label="Decrease ${product.name} quantity">−</button><span>${item.quantity}</span><button type="button" data-quantity="1" data-id="${item.id}" data-size="${item.size}" data-color="${item.color}" aria-label="Increase ${product.name} quantity">+</button></div></div>
			<div class="cart-line-end"><b>${formatPrice(product.price * item.quantity)}</b><button class="remove-item" type="button" data-remove="${item.id}" data-size="${item.size}" data-color="${item.color}">Remove</button></div>
		</article>`;
	}).join('');
	// Prepare a matching WhatsApp checkout message from the current cart.
	const orderLines = cart.map((item) => {
		const product = products.find((entry) => entry.id === item.id);
		return product ? `${item.quantity} × ${product.name} (${item.size}, ${item.color}) — ${formatPrice(product.price * item.quantity)}` : '';
	}).filter(Boolean);
	const total = cart.reduce((sum, item) => sum + (products.find((entry) => entry.id === item.id)?.price || 0) * item.quantity, 0);
	document.querySelector('#whatsappCheckout').href = createWhatsAppUrl(`Hello, I would like to order:\n${orderLines.join('\n')}\nTotal: ${formatPrice(total)}`);
}

function openCart() {
	cartDrawer.classList.add('is-open');
	cartDrawer.setAttribute('aria-hidden', 'false');
	document.querySelector('#drawerBackdrop').classList.add('is-open');
	document.body.classList.add('no-scroll');
	document.querySelector('#closeCart').focus();
}

function closeCart() {
	cartDrawer.classList.remove('is-open');
	cartDrawer.setAttribute('aria-hidden', 'true');
	document.querySelector('#drawerBackdrop').classList.remove('is-open');
	if (!quickViewDialog.open) document.body.classList.remove('no-scroll');
}

function openQuickView(productId) {
	const product = products.find((item) => item.id === productId);
	if (!product) return;
	// Accessories have one size; clothing offers the standard size range.
	const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
	const availableSizes = product.category === 'Accessories' ? ['One size'] : sizes;
	const content = document.querySelector('#quickViewContent');
	content.innerHTML = `<div class="quick-view-content">
		<img class="quick-view-image" src="${product.image}" alt="${product.name}">
		<div class="quick-view-info">
			<p class="eyebrow">${product.audience} · ${product.category}</p><h2>${product.name}</h2>
			<p class="product-rating" aria-label="${product.rating} out of 5 stars">★★★★★ <span>${product.rating} (${product.reviews} reviews)</span></p>
			<p class="product-price">${formatPrice(product.price)} ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}</p>
			<p class="quick-view-description">${product.description}</p>
			<p class="option-label">Size</p><div class="size-options">${availableSizes.map((size, index) => `<button type="button" class="size-button${index === 1 || availableSizes.length === 1 && index === 0 ? ' selected' : ''}" data-size-choice="${size}">${size}</button>`).join('')}</div>
			<p class="option-label">Color <span id="selectedColorName">${product.colors[0].name}</span></p><div class="color-options">${product.colors.map((color, index) => `<button type="button" class="color-swatch${index === 0 ? ' selected' : ''}" style="background:${color.hex}" data-color-choice="${color.name}" aria-label="${color.name}" aria-pressed="${index === 0}"></button>`).join('')}</div>
			<div class="quick-view-bottom"><div class="quick-view-quantity"><button type="button" data-modal-quantity="-1" aria-label="Decrease quantity">−</button><span id="modalQuantity">1</span><button type="button" data-modal-quantity="1" aria-label="Increase quantity">+</button></div><button type="button" class="button button-dark" data-modal-add="${product.id}">Add to bag</button></div>
		</div>
	</div>`;
	quickViewDialog.showModal();
	document.body.classList.add('no-scroll');
}

function setFilter(filter) {
	activeFilter = filterOptions.includes(filter) || filter === 'Hoodies' ? filter : 'All';
	saleOnly = false;
	updateProducts();
}

function toggleSearch(open) {
	searchPanel.hidden = !open;
	document.querySelector('#searchToggle').setAttribute('aria-expanded', String(open));
	if (open) searchInput.focus();
}

// Use event delegation because product and category buttons are rendered dynamically.
document.querySelector('#categoryGrid').addEventListener('click', (event) => {
	const link = event.target.closest('[data-filter]');
	if (!link) return;
	setFilter(link.dataset.filter);
});

filterRow.addEventListener('click', (event) => {
	const button = event.target.closest('[data-filter]');
	if (button) setFilter(button.dataset.filter);
});

document.querySelectorAll('[data-nav-filter]').forEach((link) => {
	link.addEventListener('click', () => {
		setFilter(link.dataset.navFilter);
		document.querySelector('#mainNav').classList.remove('is-open');
		document.querySelector('#menuToggle').setAttribute('aria-expanded', 'false');
	});
});

document.querySelectorAll('[data-sale-filter]').forEach((link) => {
	link.addEventListener('click', () => {
		activeFilter = 'All';
		saleOnly = true;
		updateProducts();
	});
});

productGrid.addEventListener('click', (event) => {
	const addButton = event.target.closest('[data-add-cart]');
	const quickButton = event.target.closest('[data-quick-view]');
	const wishlistButton = event.target.closest('[data-wishlist]');
	const whatsappButton = event.target.closest('[data-whatsapp]');
	if (addButton) addToCart(addButton.dataset.addCart);
	if (quickButton) openQuickView(quickButton.dataset.quickView);
	if (wishlistButton) {
		const id = wishlistButton.dataset.wishlist;
		wishlist = wishlist.includes(id) ? wishlist.filter((item) => item !== id) : [...wishlist, id];
		localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
		renderProducts();
		showToast(wishlist.includes(id) ? 'Saved to your wishlist' : 'Removed from your wishlist');
	}
	if (whatsappButton) {
		const product = products.find((item) => item.id === whatsappButton.dataset.whatsapp);
		if (product) window.open(createWhatsAppUrl(`Hello, I want to order ${product.name}. Price: ${formatPrice(product.price)}.`), '_blank', 'noopener,noreferrer');
	}
});

document.querySelector('#cartItems').addEventListener('click', (event) => {
	const quantityButton = event.target.closest('[data-quantity]');
	const removeButton = event.target.closest('[data-remove]');
	if (quantityButton) {
		const item = cart.find((entry) => entry.id === quantityButton.dataset.id && entry.size === quantityButton.dataset.size && entry.color === quantityButton.dataset.color);
		if (!item) return;
		item.quantity += Number(quantityButton.dataset.quantity);
		if (item.quantity <= 0) cart = cart.filter((entry) => entry !== item);
		saveCart();
	}
	if (removeButton) {
		cart = cart.filter((item) => !(item.id === removeButton.dataset.remove && item.size === removeButton.dataset.size && item.color === removeButton.dataset.color));
		saveCart();
	}
});

document.querySelector('#quickViewContent').addEventListener('click', (event) => {
	const sizeButton = event.target.closest('[data-size-choice]');
	const colorButton = event.target.closest('[data-color-choice]');
	const quantityButton = event.target.closest('[data-modal-quantity]');
	const addButton = event.target.closest('[data-modal-add]');
	if (sizeButton) {
		document.querySelectorAll('.size-button').forEach((button) => button.classList.toggle('selected', button === sizeButton));
	}
	if (colorButton) {
		document.querySelectorAll('.color-swatch').forEach((button) => {
			button.classList.toggle('selected', button === colorButton);
			button.setAttribute('aria-pressed', String(button === colorButton));
		});
		document.querySelector('#selectedColorName').textContent = colorButton.dataset.colorChoice;
	}
	if (quantityButton) {
		const quantity = document.querySelector('#modalQuantity');
		quantity.textContent = Math.max(1, Number(quantity.textContent) + Number(quantityButton.dataset.modalQuantity));
	}
	if (addButton) {
		addToCart(addButton.dataset.modalAdd, document.querySelector('.size-button.selected')?.dataset.sizeChoice || 'M', document.querySelector('.color-swatch.selected')?.dataset.colorChoice || 'Default', Number(document.querySelector('#modalQuantity').textContent));
		quickViewDialog.close();
		if (!cartDrawer.classList.contains('is-open')) document.body.classList.remove('no-scroll');
	}
});

// Drawer, search, and mobile navigation controls.
document.querySelector('#quickViewDialog').addEventListener('click', (event) => {
	if (event.target === quickViewDialog) quickViewDialog.close();
});
quickViewDialog.addEventListener('close', () => {
	if (!cartDrawer.classList.contains('is-open')) document.body.classList.remove('no-scroll');
});
document.querySelector('#closeQuickView').addEventListener('click', () => quickViewDialog.close());

document.querySelector('#cartToggle').addEventListener('click', openCart);
document.querySelector('#closeCart').addEventListener('click', closeCart);
document.querySelector('#drawerBackdrop').addEventListener('click', closeCart);
document.querySelector('#continueShopping').addEventListener('click', closeCart);
document.querySelector('#clearCart').addEventListener('click', () => {
	cart = [];
	saveCart();
	showToast('Your bag is now clear');
});
document.querySelector('#checkoutButton').addEventListener('click', () => {
	const url = document.querySelector('#whatsappCheckout').href;
	if (cart.length) window.open(url, '_blank', 'noopener,noreferrer');
});

document.querySelector('#searchToggle').addEventListener('click', () => toggleSearch(searchPanel.hidden));
document.querySelector('#searchClear').addEventListener('click', () => {
	searchInput.value = '';
	renderProducts();
	searchInput.focus();
});
searchInput.addEventListener('input', renderProducts);
document.querySelector('#sortSelect').addEventListener('change', renderProducts);
document.querySelector('#menuToggle').addEventListener('click', (event) => {
	const button = event.currentTarget;
	const isOpen = button.getAttribute('aria-expanded') === 'true';
	button.setAttribute('aria-expanded', String(!isOpen));
	document.querySelector('#mainNav').classList.toggle('is-open', !isOpen);
});
document.querySelector('#mainNav').addEventListener('click', (event) => {
	if (event.target.closest('a') && !event.target.closest('[data-nav-filter]')) {
		document.querySelector('#mainNav').classList.remove('is-open');
		document.querySelector('#menuToggle').setAttribute('aria-expanded', 'false');
	}
});
document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		closeCart();
		document.querySelector('#mainNav').classList.remove('is-open');
		document.querySelector('#menuToggle').setAttribute('aria-expanded', 'false');
	}
});

document.querySelector('#viewNewArrivals').addEventListener('click', () => {
	activeFilter = 'All';
	saleOnly = false;
	document.querySelector('#sortSelect').value = 'newest';
	updateProducts();
});


document.querySelector('#contactForm').addEventListener('submit', (event) => {
	event.preventDefault();
	const form = event.currentTarget;
	const message = document.querySelector('#contactMessage');
	if (!form.checkValidity()) {
		message.textContent = 'Please complete your name, a valid email, and your message.';
		message.className = 'form-message is-error';
		form.reportValidity();
		return;
	}
	message.textContent = 'Thanks for reaching out. Our team will be in touch soon.';
	message.className = 'form-message is-success';
	form.reset();
});

document.querySelector('#currentYear').textContent = new Date().getFullYear();
renderCategories();
updateProducts();
renderCart();
