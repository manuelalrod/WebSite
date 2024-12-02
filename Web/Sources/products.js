const products = [
  {
    id: 1,
    name: 'Leika M11',
    price: 599.95,
    marca: 'Leika',
    descripcion: 'The Leica M11 features a triple-resolution full-frame BSI CMOS sensor, capturing 60, 36 or 18 megapixel images. Includes an IR + UV filter for effective oblique light correction. It has a high-resolution touch screen and ergonomic controls. Its ISO range goes from 64 to 50,000, with 14 bits of color depth and up to 15 stops of dynamic range.',
    stock: 200,
    image: 'https://i.pinimg.com/736x/d9/12/b3/d912b3f434a1bdd3d7881385962d529d.jpg',
    images: [
      "https://i.pinimg.com/736x/d9/12/b3/d912b3f434a1bdd3d7881385962d529d.jpg",
      "https://i.pinimg.com/736x/3e/80/02/3e8002e788b00b570872287148c22be7.jpg",
    ]
  },
  {
    id: 2,
    name: 'AirPods Pro',
    price: 90.95,
    marca: 'Apple',
    descripcion: 'Estos auriculares inalámbricos ofrecen 4.5 horas de reproducción y 18 horas con la funda de carga. La carga rápida de 15 minutos brinda 2 horas adicionales. Tienen micrófono para llamadas y son compatibles con Google Assistant y Siri.',
    stock: 100,
    image: 'https://i.pinimg.com/736x/0c/e9/c2/0ce9c25dde00c7d6e6fdf72b7ddc072e.jpg',
  },
  {
    id: 3,
    name: 'Mate30 Pro',
    price: 399.95,
    marca: 'Huawei',
    descripcion: 'El Huawei Mate 30 Pro tiene una pantalla OLED de 6.53", procesador Kirin 990, 8GB de RAM y 256GB de almacenamiento. Su cámara cuádruple de 40 MP y la frontal de 32 MP ofrecen gran calidad. Incluye batería de 4500 mAh, carga rápida e inalámbrica, parlantes estéreo, y EMUI 10 basado en Android 10.',
    stock: 100,
    image: 'https://i.pinimg.com/736x/56/eb/93/56eb939df65237bc672ad7af8433a505.jpg',
    images: [
      "https://i.pinimg.com/736x/56/eb/93/56eb939df65237bc672ad7af8433a505.jpg",
      "https://i.pinimg.com/736x/74/d4/1f/74d41fac45af9c37b831410c331db460.jpg",
    ]
  },
  {
    id: 4,
    name: 'XBOOM GO',
    price: 39.50,
    marca: 'LG',
    descripcion: 'El LG XBOOM Go PL7 ofrece 30W de potencia y sonido de alta calidad con tecnología Meridian. Su batería de larga duración proporciona hasta 24 horas de música continua. Además, es resistente al agua con certificación IPX5 y cuenta con iluminación LED que se sincroniza con la música.',
    stock: 100,
    image: 'https://i.pinimg.com/736x/d3/59/d5/d359d56fb126689c749968c73f13c7de.jpg',
  },
  {
    id: 5,
    name: "Watch Ultra2",
    price: 85.55,
    marca: 'Apple',
    descripcion: 'The Apple Watch Ultra 2, designed for sport and adventure, is available in satin black titanium. It features a multi-day battery, dual-frequency GPS, Apples brightest display, and a durable titanium case. In addition, it has a sapphire crystal and a customizable Action Button.',
    stock: 100,
    image: "https://i.pinimg.com/736x/70/07/88/7007889bcfaff5482071a81bb726078b.jpg"
  },
  {
    id: 6,
    name: "Shure MV6",
    price: 859.95,
    marca: 'Shure',
    descripcion: 'The MV6 USB-C microphone offers professional sound with Voice Isolation, Auto Level Mode, Popper Stopper™ and Real-Time Noise Eliminator. With USB-C and 3.5mm headphone output, it is ideal for gamers and streamers. Can be customized with Shures MOTIV Mix™ app.',
    stock: 100,
    image: "https://cdn.xingosoftware.com/audioxpress/images/fetch/dpr_1,w_765,h_430,c_fit/https%3A%2F%2Faudioxpress.com%2Fassets%2Fupload%2Fimages%2F1%2F20240909220154_Shure-MV6-Hero-TWeb.jpg"
  },
  {
    id: 7,
    name: "D-Spiderman",
    price: 599.95,
    marca: 'PlayStation',
    descripcion: 'Make your mark on the game with a customizable controller that includes remappable buttons, adjustable triggers and joysticks, interchangeable joystick caps, and back buttons. It offers high performance and customization, while maintaining all the immersive features of the DualSense wireless controller.',
    stock: 150,
    image: "https://i.ebayimg.com/images/g/-XMAAOSwG3lk8WvF/s-l1200.jpg"
  },
  {
    id: 8,
    name: "Mouse G502",
    price: 29.00,
    marca: 'Logitech',
    descripcion: 'The G502 HERO is designed for advanced gaming performance, with a sub-micron precision HERO 25K sensor, customizable LIGHTSYNC RGB, built-in profiles, and repositionable weights.',
    stock: 100,
    image: "https://i.pinimg.com/736x/1f/58/e9/1f58e944785f6bb6d93c65d763ee7384.jpg"
  },
  {
    id: 9,
    name: "JBL Boombox",
    price: 100.05,
    marca: 'JBL',
    descripcion: 'The JBL Boombox is a powerful Bluetooth speaker with deep bass and a 20,000 mAh battery that offers up to 24 hours of music. Water resistant (IPX7), it has indoor/outdoor modes and allows you to connect more than 100 JBL Connect+ compatible speakers.',
    stock: 100,
    image: "https://i.pinimg.com/736x/84/5e/db/845edb9fe52c9a60b33c985bacf2c4c4.jpg"
  },
  {
    id: 10,
    name: "Iphone 12 Pro",
    price: 599.95,
    marca: 'Apple',
    descripcion: 'The iPhone 12 Pro has a 6.1" OLED screen, A14 Bionic processor, 12 MP and LiDAR cameras, and storage options up to 512GB. It includes Face ID, Apple Pay, fast and wireless charging, and runs iOS 14.',
    stock: 100,
    image: "https://i.pinimg.com/736x/95/c7/72/95c772256c4404f78db14466fb598365.jpg"
  },
  {
    id: 11,
    name: "BeatsStudioBuds",
    price: 79.95,
    marca: 'Apple',
    descripcion: 'The Beats Studio Buds offer powerful sound, noise cancellation and up to 24 hours of battery life. With fast charging, 1 hour of playback is obtained with just 5 minutes of charging. They include high-quality microphones for calls and customizable controls.',
    stock: 100,
    image: "https://i.pinimg.com/736x/05/53/46/0553469349cbceb20877cb95dc1b585f.jpg"
  },
  {
    id: 12,
    name: "Pro X2",
    price: 50.20,
    marca: 'Logitech',
    descripcion: 'PRO X2 LIGHTSPEED headset delivers a pro-caliber audio experience for competitive play-because every sound matters. The headset helps pro players and serious gamers eliminate barriers and distractioc in the pursuit of victory.',
    stock: 100,
    image: "https://i.pinimg.com/736x/37/1d/6d/371d6d7def05b506d0fe5fab11acbfce.jpg"
  },
  {
    id: 13,
    name: "Mad-box",
    price: 599.99,
    marca: 'Mad studios',
    descripcion: 'The MadBox is a gaming console from Slightly Mad Studios, offering 4K gaming, 120 FPS VR, and cross-platform compatibility. It features a unique M-shaped design and customizable LEDs. Its release date is still uncertain.',
    stock: 100,
    image: "https://i.pinimg.com/736x/b1/99/6d/b1996dc87505afc3e8d5a746d5093a26.jpg"
  },
  {
    id: 14,
    name: "Pentax K-01",
    price: 150.00,
    marca: 'Pentax Corporation',
    descripcion: 'The Pentax K-01 features 16.28 megapixels, high-speed burst shooting, an extra-wide sensitivity range with a top sensitivity of ISO 25600 and Full HD video recording.',
    stock: 100,
    image: "https://i.pinimg.com/736x/aa/04/7e/aa047e95746d24ac57f68de09b3b3f47.jpg"
  },
  {
    id: 15,
    name: "Xiaomi 13 Ultra",
    price: 290.95,
    marca: 'Xiaomi',
    descripcion: 'The Xiaomi 13 Ultra features a 50MP main camera with Leica optics, a 6.73-inch QHD+ display, Snapdragon 8 Gen 2, and a 5000mAh battery with 90W wired charging. It also includes a 32MP selfie camera, stereo speakers, and IP68 water resistance.',
    stock: 100,
    image: "https://i.pinimg.com/736x/d4/de/8c/d4de8c3f43925103e4e3ec5037325dbd.jpg"
  },
  {
    id: 16,
    name: "WatchOS 8",
    price: 660.95,
    marca: 'Apple',
    descripcion: 'The Apple Watch Series 8 offers an always-on Retina display, health sensors like a temperature sensor and heart rate monitor, and crash detection. It supports up to 18 hours of battery life, fast charging, and integrates with the Apple ecosystem. Available in aluminum and stainless steel, it runs on watchOS 9.',
    stock: 100,
    image: "https://i.pinimg.com/736x/6e/d3/b5/6ed3b5b1a549881b100363f26f96d5e1.jpg",
    images: [
      "https://i.pinimg.com/736x/6e/d3/b5/6ed3b5b1a549881b100363f26f96d5e1.jpg",
      "https://i.pinimg.com/736x/a2/a7/34/a2a7343b90b4556f3d23731cd4874edd.jpg",
      "https://i.pinimg.com/736x/99/9b/7c/999b7c2ac5c2a4d24066bc7a0ba5c078.jpg",
      "https://i.pinimg.com/736x/35/e8/3f/35e83fcaaf889e2ccba2e63d2e6b4cde.jpg",
    ]
  }
];

//Catalogo
window.onload = function () {
  const catalog = document.getElementById('catalog');

  products.forEach(product => {
    const productCard = `
      <div class="wrapper">
        <div class="product-card">
          <a href="#" class="product-link">
            <img src="${product.image}" alt="${product.name}" />
            <span class="overlay"></span>
            <span class="info">
              <span class="title">${product.name}</span>
              <span class="price">$${product.price.toFixed(2)}</span>
            </span>
          </a>
          <div class="button-wrap">
            <a href="#" class="cart button">Add to cart</a>
            <a href="DetailsProdu.html?id=${product.id}" class="wish button">
              <i class="fa-solid fa-circle-info"></i>
            </a>
          </div>
        </div>
    </div>    
      `;

    catalog.innerHTML += productCard;
  });
};



//subir y bajar cantidad - no mover si no, no sirve xd
document.querySelector('.decrease').addEventListener('click', function () {
  let counter = document.getElementById('counter');
  let currentValue = parseInt(counter.innerText);
  if (currentValue > 0) {
    counter.innerText = currentValue - 1;
  }
});

document.querySelector('.increase').addEventListener('click', function () {
  let counter = document.getElementById('counter');
  let currentValue = parseInt(counter.innerText);
  counter.innerText = currentValue + 1;
});


//para escoger el color
const colorOptions = document.querySelectorAll('.color-option');

// Agregar funcionalidad de selección
colorOptions.forEach(option => {
  option.addEventListener('click', function () {
    // Eliminar la clase 'selected' de todos los círculos
    colorOptions.forEach(opt => opt.classList.remove('selected'));

    // Agregar la clase 'selected' al círculo clicado
    this.classList.add('selected');
  });
});

//Detalle de producto

// Function to get query parameter from URL
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Get product ID from URL
const productId = getQueryParam('id');
console.log('Product ID from URL:', productId);

// Find the product with the corresponding ID
const product = products.find(p => p.id == productId);
console.log('Product found:', product);

// Display product details
if (product) {
  // Set main image
  document.getElementById('mainImage').src = product.image;
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productPrice').textContent = `$${product.price}`;
  document.getElementById('productDescription').textContent = product.descripcion;
  document.getElementById('productBrand').textContent = `Brand: ${product.marca}`;

  // Generate additional images (small images)
  const imageOptions = document.getElementById('imageOptions');
  imageOptions.innerHTML = ''; // Clear existing images

  // Check if there are additional images
  if (product.images && product.images.length > 0) {
    console.log('Adding additional images:', product.images); // Verifica que esté cargando las imágenes
    product.images.forEach(imgSrc => {
      const imgElement = document.createElement('img');
      imgElement.src = imgSrc;
      imgElement.alt = "Additional image";
      imgElement.onclick = function() {
        document.getElementById('mainImage').src = imgSrc;  // Update the main image
      };
      imageOptions.appendChild(imgElement);  // Append to the container
    });
  } else {
    // If no additional images, show a message
    imageOptions.innerHTML = '<p>No additional images available</p>';
  }

} else {
  document.body.innerHTML = '<h1>Product not found</h1>';
}

