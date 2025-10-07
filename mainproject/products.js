
const products = [
  {
    id: 'facial-tissue-500',
    name: 'Gelbo Premium Facial Tissue 500 sheet',
    category: 'Tisu',
    image: 'photos/gelbo-product-photos/tisu-gelbo.jpg',
    description_id: 'Adalah kualitas internasional dengan tekstur halus dan lembut, menyerap cairan dengan efektif. Terbuat dari bahan alami pilihan yang ramah lingkungan, Gelbo memberikan kenyamanan dan kebersihan optimal untuk Anda dan keluarga. Dengan desain menarik dan praktis dibawa, Gelbo memenuhi kebutuhan sehari-hari Anda.',
    description_en: 'An international quality tissue with a smooth and soft texture, absorbs liquids effectively. Made from carefully selected natural materials that are environmentally friendly, Gelbo provides optimal comfort and hygiene for you and your family. With an attractive and portable design, Gelbo meets your daily needs.',
    specs: [
      'SVLK Certified',
      'Halal Certified',
      '2 Ply',
      '500 Sheets',
      '48 Pack/Ball'
    ]
  },
  {
    id: 'facial-tissue-300',
    name: 'Gelbo Premium Facial Tissue 300 sheet',
    category: 'Tisu',
    image: 'photos/gelbo-product-photos/tisu-gelbo.jpg',
    description_id: 'Gelbo Premium Facial Tissue 300 sheet adalah tisu wajah yang lembut dan higienis sehingga aman digunakan dalam setiap kesempatan dan keperluan sehari-hari.',
    description_en: 'Gelbo Premium Facial Tissue 300 sheets: Soft, hygienic, and perfect for daily use. Gentle on your skin, anytime, anywhere.',
    specs: [
      'SVLK Certified',
      'Halal Certified',
      '2 Ply',
      '300 Sheets',
      '48 Pack/Ball'
    ]
  },
  {
    id: 'family-tissue-2000',
    name: 'Gelbo Premium Family Tissue 2000 sheet',
    category: 'Tisu',
    image: 'photos/gelbo-product-photos/tisu-gelbo.jpg',
    description_id: 'Sangat memahami kebutuhan tisu Anda dan keluarga. Dengan tekstur halus dan lembut, menyerap cairan dengan efektif sehingga memberikan kenyamanan dan kebersihan optimal untuk Anda dan keluarga. Gelbo memenuhi kebutuhan sehari-hari Anda.',
    description_en: 'Gelbo is designed with you and your family in mind. Its soft texture and effective absorption provide optimal comfort and hygiene, making it the perfect choice for your everyday needs.',
    specs: [
      'SVLK Certified',
      'Halal Certified',
      '2 Ply',
      '2000 Sheets',
      '12 Pack/Karton'
    ]
  },
  {
    id: 'pop-up-tissue-360',
    name: 'Gelbo Premium Pop Up Tissue 360 sheet',
    category: 'Tisu',
    image: 'photos/gelbo-product-photos/tisu-gelbo.jpg',
    description_id: 'Gelbo Tissue Pop-Up adalah solusi praktis dan higienis untuk kebutuhan sehari-hari. Dengan sistem pop-up yang cerdas, tisu ini memudahkan pengambilan satu per satu, menjaga kebersihan dan mencegah kontaminasi. Terbuat dari bahan lembut dan alami, cocok untuk berbagai kebutuhan, mulai dari rumah hingga perjalanan.',
    description_en: 'Gelbo Pop-Up Tissue is a practical and hygienic solution for daily needs. With a smart pop-up system, this tissue makes it easy to take one sheet at a time, maintaining cleanliness and preventing contamination. Made from soft and natural materials, suitable for various needs from home to travel.',
    specs: [
      'SVLK Certified',
      'Halal Certified',
      '1 Ply',
      '360 Sheets',
      '120 Pack/Ball'
    ]
  },
  {
    id: 'facial-tissue-400',
    name: 'Gelbo Premium Facial Tissue 400 sheet',
    category: 'Tisu',
    image: 'photos/gelbo-product-photos/tisu-gelbo.jpg',
    description_id: 'Adalah kualitas internasional dengan tekstur halus dan lembut, menyerap cairan dengan efektif. Terbuat dari bahan alami pilihan yang ramah lingkungan, Gelbo memberikan kenyamanan dan kebersihan optimal untuk Anda dan keluarga. Dengan desain menarik dan praktis dibawa, Gelbo memenuhi kebutuhan sehari-hari Anda.',
    description_en: 'An international quality tissue with smooth and soft texture, absorbs liquids effectively. Made from carefully selected natural materials that are environmentally friendly, Gelbo provides optimal comfort and hygiene for you and your family. With an attractive and portable design, Gelbo meets your daily needs.',
    specs: [
      'SVLK Certified',
      'Halal Certified',
      '2 Ply',
      '400 Sheets',
      '60 Pack/Ball'
    ]
  },
  {
    id: 'travel-pack-100',
    name: 'Gelbo Premium Travel Pack 100 sheet',
    category: 'Tisu',
    image: 'photos/gelbo-product-photos/tisu-gelbo.jpg',
    description_id: 'Gelbo Premium Facial Tissue 300 sheets: Soft, hygienic, and perfect for daily use. Gentle on your skin, anytime, anywhere.',
    description_en: 'Gelbo Premium Facial Tissue 300 sheets: Soft, hygienic, and perfect for daily use. Gentle on your skin, anytime, anywhere.',
    specs: [
      'SVLK Certified',
      'Halal Certified',
      '2 Ply',
      '100 Sheets',
      '100 Pack/Ball'
    ]
  },
  {
    id: 'toilet-tissue-6-roll',
    name: 'Gelbo Premium Toilet Tissue 6 Roll',
    category: 'Tisu',
    image: 'photos/gelbo-product-photos/tissue-toilet-gelbo.png',
    description_id: 'Gelbo Premium Toilet Tissue adalah tisu berkualitas tinggi yang dirancang untuk kenyamanan dan kebersihan optimal. Dibuat dari bahan lembut dan alami, tisu ini memiliki daya serap tinggi dan ramah lingkungan. Ini membantu menjaga kebersihan dan kesehatan Anda, membuatnya cocok untuk penggunaan sehari-hari dan memberikan pengalaman yang nyaman dan aman.',
    description_en: 'Gelbo Premium Toilet Tissue is a high-quality tissue designed for optimal comfort and hygiene. Made from soft and natural materials, this tissue is absorbent and eco-friendly. It helps maintain your cleanliness and health, making it suitable for daily use and providing a comfortable and safe experience.',
    specs: [
      'SVLK Certified',
      'Halal Certified',
      '1 Ply',
      '200 Sheets',
      '6 Roll'
    ]
  },
  {
    id: 'straw-flexible-5mm-paper-wrap',
    name: 'Gelbo Straw Flexible 5 mm Paper Wrap',
    category: 'Sedotan',
    image: 'photos/gelbo-product-photos/sedotan-gelbo.jpg',
    description_id: 'Sedotan fleksibel higienis dengan bungkus kertas.',
    description_en: 'Hygienic flexible straw with paper wrap.',
    specs: [
      'Warna: Putih/Hitam',
      'Ukuran: 5mm x 250mm',
      '500 Pcs x 20 Pack / Karton'
    ]
  },
  {
    id: 'straw-flexible-6mm-paper-wrap',
    name: 'Gelbo Straw Flexible 6 mm Paper Wrap',
    category: 'Sedotan',
    image: 'photos/gelbo-product-photos/sedotan-gelbo.jpg',
    description_id: 'Sedotan fleksibel higienis dengan bungkus kertas.',
    description_en: 'Hygienic flexible straw with paper wrap.',
    specs: [
      'Warna: Putih/Hitam',
      'Ukuran: 6mm x 260mm',
      '500 Pcs x 20 Pack / Karton'
    ]
  },
  {
    id: 'straw-flexible-5mm',
    name: 'Gelbo Straw Flexible 5 mm',
    category: 'Sedotan',
    image: 'photos/gelbo-product-photos/sedotan-gelbo.jpg',
    description_id: 'Sedotan fleksibel aneka warna.',
    description_en: 'Multi-colored flexible straw.',
    specs: [
      'Warna: Putih/Hitam',
      'Ukuran: 5mm x 240mm',
      '25 x 25 x 10 Pack / Ball'
    ]
  },
  {
    id: 'straw-flexible-6mm',
    name: 'Gelbo Straw Flexible 6 mm',
    category: 'Sedotan',
    image: 'photos/gelbo-product-photos/sedotan-gelbo.jpg',
    description_id: 'Sedotan fleksibel aneka warna.',
    description_en: 'Multi-colored flexible straw.',
    specs: [
      'Warna: Putih/Hitam',
      'Ukuran: 6mm x 230mm',
      '20 x 25 x 10 Pack / Ball'
    ]
  },
  {
    id: 'straw-bubble-plastic-wrap',
    name: 'Gelbo Straw Bubble Wrap Plastic',
    category: 'Sedotan',
    image: 'photos/gelbo-product-photos/sedotan-gelbo.jpg',
    description_id: 'Sedotan bubble dengan bungkus plastik higienis.',
    description_en: 'Bubble straw with hygienic plastic wrap.',
    specs: [
      'Diameter: 6mm, 12mm',
      'Panjang: 200mm',
      '6mm: 250 x 40 Pack / Karton',
      '12mm: 100 x 25 Pack / Karton'
    ]
  },
  {
    id: 'straw-bubble-color-kw',
    name: 'Gelbo Straw Bubble Color KW',
    category: 'Sedotan',
    image: 'photos/gelbo-product-photos/sedotan-gelbo.jpg',
    description_id: 'Sedotan bubble aneka warna kualitas KW.',
    description_en: 'Assorted color bubble straws.',
    specs: [
      'Diameter: 6mm, 8mm, 12mm',
      '200 x 20 Pack / Ball'
    ]
  },
  {
    id: 'straw-bubble-stabilo',
    name: 'Gelbo Straw Bubble Color Line Stabilo',
    category: 'Sedotan',
    image: 'photos/gelbo-product-photos/sedotan-gelbo.jpg',
    description_id: 'Sedotan bubble dengan warna stabilo bergaris.',
    description_en: 'Bubble straw with striped stabilo colors.',
    specs: [
      'Diameter: 6mm, 8mm, 12mm',
      '200 x 20 Pack / Ball'
    ]
  },
  {
    id: 'straw-super-neon',
    name: 'Gelbo Straw Color Super Neon',
    category: 'Sedotan',
    image: 'photos/gelbo-product-photos/sedotan-gelbo.jpg',
    description_id: 'Sedotan dengan warna super neon yang cerah.',
    description_en: 'Straw with bright super neon colors.',
    specs: [
      '35 x 5 x 35 Pack / Ball'
    ]
  },
  {
    id: 'straw-coffee-stirrer',
    name: 'Gelbo Straw Coffee Stirrer',
    category: 'Sedotan',
    image: 'photos/gelbo-product-photos/sedotan-gelbo.jpg',
    description_id: 'Pengaduk kopi praktis dan higienis.',
    description_en: 'Practical and hygienic coffee stirrer.',
    specs: [
      'Warna: Coklat Tua',
      '500 x 20 Pack / Karton'
    ]
  },
  {
    id: 'paper-cup-8oz',
    name: 'Gelbo Paper Cup 8 oz Motif',
    category: 'Gelas & Kemasan',
    image: 'photos/gelbo-product-photos/gelbo-4536.jpg',
    description_id: 'Gelas kertas 8 oz dengan motif menarik.',
    description_en: '8 oz paper cup with attractive motifs.',
    specs: [
      'Ukuran: 8 oz',
      'Material: Kertas',
      '50 x 20 Pack'
    ]
  },
  {
    id: 'paper-cup-6-5oz',
    name: 'Gelbo Paper Cup 6.5 oz',
    category: 'Gelas & Kemasan',
    image: 'photos/gelbo-product-photos/gelbo-4536.jpg',
    description_id: 'Gelas kertas 6.5 oz untuk berbagai keperluan.',
    description_en: '6.5 oz paper cup for various needs.',
    specs: [
      'Ukuran: 6.5 oz',
      'Material: PP',
      'Warna: Motif, Hitam, Putih',
      '50 x 20 Pack'
    ]
  },
  {
    id: 'plastic-cup',
    name: 'Gelbo Glass Plastic',
    category: 'Gelas & Kemasan',
    image: 'photos/gelbo-product-photos/gelbo-4505.jpg',
    description_id: 'Gelas plastik bening dalam berbagai ukuran.',
    description_en: 'Clear plastic glass in various sizes.',
    specs: [
      'Ukuran: 10, 12, 14, 16 oz',
      'Material: PP',
      '50 x 40 Pack'
    ]
  },
  {
    id: 'plastic-cup-220ml',
    name: 'Gelbo Glass Plastic 220 ml',
    category: 'Gelas & Kemasan',
    image: 'photos/gelbo-product-photos/gelbo-4505.jpg',
    description_id: 'Gelas plastik bening ukuran 220 ml.',
    description_en: '220 ml clear plastic glass.',
    specs: [
      'Ukuran: 220 ml',
      'Material: PP',
      '50 x 40 Pack'
    ]
  },
  {
    id: 'plastic-cup-18-22oz',
    name: 'Gelbo Glass Plastic 18 & 22 oz',
    category: 'Gelas & Kemasan',
    image: 'photos/gelbo-product-photos/gelbo-4505.jpg',
    description_id: 'Gelas plastik bening ukuran besar.',
    description_en: 'Large size clear plastic glass.',
    specs: [
      'Ukuran: 18 oz, 22 oz',
      'Material: PP',
      '50 x 40 Pack'
    ]
  },
  {
    id: 'lids-paper-cup',
    name: 'Gelbo Lids Paper Cup',
    category: 'Gelas & Kemasan',
    image: 'photos/gelbo-product-photos/gelbo-4606.jpg',
    description_id: 'Tutup untuk gelas kertas ukuran 8 oz dan 6.5 oz.',
    description_en: 'Lids for 8 oz and 6.5 oz paper cups.',
    specs: [
      'Ukuran: 8 oz, 6.5 oz',
      'Warna: Motif, Hitam, Putih Susu',
      '50 x 20 Pack'
    ]
  },
  {
    id: 'seal-cup',
    name: 'Gelbo Seal Cup',
    category: 'Gelas & Kemasan',
    image: 'photos/gelbo-product-photos/gelbo-4627.jpg',
    description_id: 'Plastik seal untuk berbagai ukuran gelas.',
    description_en: 'Sealing plastic for various cup sizes.',
    specs: [
      'Ukuran: 10, 12, 14, 16, 18, 22 oz',
      'Motif: Bening, Kartun, Buah, Minuman, dll.',
      '750 Pcs/Roll',
      '12 Roll'
    ]
  },
  {
    id: 'tali-rafia',
    name: 'Gelbo String of Raffia 1 Kg',
    category: 'Lainnya',
    image: 'photos/gelbo-product-photos/tali-rafia-gelbo.jpg',
    description_id: 'Tali rafia serbaguna dengan berat 1 Kg.',
    description_en: 'Multipurpose raffia string, 1 Kg weight.',
    specs: [
      'Berat: 1 Kg',
      '15 Roll/Ball'
    ]
  },
  {
    id: 'duck-spoon',
    name: 'Gelbo Plastic Duck Spoon White',
    category: 'Lainnya',
    image: 'photos/gelbo-product-photos/sendok-plastik-gelbo.jpg',
    description_id: 'Sendok bebek plastik berwarna putih.',
    description_en: 'White plastic duck spoon.',
    specs: [
      'Warna: Putih',
      '120 x 20 Pack/Ball'
    ]
  }
];
