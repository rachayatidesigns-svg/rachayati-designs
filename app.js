/**
 * Rachayati Designs - Core Application Script
 * Clean, Warm Spiritual Lifestyle & Dedicated Store
 * Complete 40-Product Devotional Catalog across 7 Sacred Categories
 * Dedicated Product Page Support (product.html) with Amazon-Style Fixed Variant Switcher
 */

// ==========================================
// 1. PRODUCT CATALOG DATA (All 40 Sacred Products)
// ==========================================
const PRODUCTS_DATA = [
    {
        "id": "bandhanwar-haribol-bandhanwar-english",
        "name": "Haribol Bandhanwar - English",
        "category": "bandhanwar",
        "categoryName": "Bandhanwar / Toran",
        "collection": null,
        "price": 250,
        "mrp": 350,
        "dimension": "22 x 4.5 in; 4.5 ft thread",
        "badge": "Sacred Toran",
        "tag": "Toran & Bandhanwar",
        "description": "Bring a traditional devotional touch to your car and home with the Rachayati Designs Bandhanwar. Designed with vibrant colours and spiritual motifs, these decorative torans are suitable for a car rear window, main door, pooja room, home temple, walls or festive spaces. The Bandhanwar measures 22 x 4.5 inches (25 x 4.5 inches for Jai Sri Ram) and is made from lightweight polyester, making it easy to hang and store when not in use. Available in English and Hindi designs with devotional expressions such as the Hare Krishna Mahamantra, Jai Sri Ram and Haribol.",
        "images": [
            "Product Catalogue/Bandhanwar/Haribol Bandhanwar - English/1.png",
            "Product Catalogue/Bandhanwar/Haribol Bandhanwar - English/2.png",
            "Product Catalogue/Bandhanwar/Haribol Bandhanwar - English/3.png",
            "Product Catalogue/Bandhanwar/Haribol Bandhanwar - English/4.png",
            "Product Catalogue/Bandhanwar/Haribol Bandhanwar - English/5.png"
        ],
        "isFeatured": false
    },
    {
        "id": "bandhanwar-jai-sri-ram-bandhanwar-hindi",
        "name": "Jai Sri Ram Bandhanwar - Hindi",
        "category": "bandhanwar",
        "categoryName": "Bandhanwar / Toran",
        "collection": null,
        "price": 250,
        "mrp": 350,
        "dimension": "25 x 4.5 in; 4.5 ft thread",
        "badge": "Bestseller",
        "tag": "Toran & Bandhanwar",
        "description": "Bring a traditional devotional touch to your car and home with the Rachayati Designs Bandhanwar. Designed with vibrant colours and spiritual motifs, these decorative torans are suitable for a car rear window, main door, pooja room, home temple, walls or festive spaces. The Bandhanwar measures 22 x 4.5 inches (25 x 4.5 inches for Jai Sri Ram) and is made from lightweight polyester, making it easy to hang and store when not in use. Available in English and Hindi designs with devotional expressions such as the Hare Krishna Mahamantra, Jai Sri Ram and Haribol.",
        "images": [
            "Product Catalogue/Bandhanwar/Jai Sri Ram Bandhanwar - Hindi/1.png",
            "Product Catalogue/Bandhanwar/Jai Sri Ram Bandhanwar - Hindi/2.png",
            "Product Catalogue/Bandhanwar/Jai Sri Ram Bandhanwar - Hindi/3.png",
            "Product Catalogue/Bandhanwar/Jai Sri Ram Bandhanwar - Hindi/4.png",
            "Product Catalogue/Bandhanwar/Jai Sri Ram Bandhanwar - Hindi/5.png"
        ],
        "isFeatured": true
    },
    {
        "id": "bandhanwar-mahamantra-bandhanwar-blue-green-english",
        "name": "Mahamantra Bandhanwar - Blue Green - English",
        "category": "bandhanwar",
        "categoryName": "Bandhanwar / Toran",
        "collection": null,
        "price": 250,
        "mrp": 350,
        "dimension": "22 x 4.5 in; 4.5 ft thread",
        "badge": "Sacred Toran",
        "tag": "Toran & Bandhanwar",
        "description": "Bring a traditional devotional touch to your car and home with the Rachayati Designs Bandhanwar. Designed with vibrant colours and spiritual motifs, these decorative torans are suitable for a car rear window, main door, pooja room, home temple, walls or festive spaces. The Bandhanwar measures 22 x 4.5 inches (25 x 4.5 inches for Jai Sri Ram) and is made from lightweight polyester, making it easy to hang and store when not in use. Available in English and Hindi designs with devotional expressions such as the Hare Krishna Mahamantra, Jai Sri Ram and Haribol.",
        "images": [
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Blue Green - English/1.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Blue Green - English/2.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Blue Green - English/3.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Blue Green - English/4.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Blue Green - English/5.png"
        ],
        "isFeatured": false
    },
    {
        "id": "bandhanwar-mahamantra-bandhanwar-blue-green-hindi",
        "name": "Mahamantra Bandhanwar - Blue Green - Hindi",
        "category": "bandhanwar",
        "categoryName": "Bandhanwar / Toran",
        "collection": null,
        "price": 250,
        "mrp": 350,
        "dimension": "22 x 4.5 in; 4.5 ft thread",
        "badge": "Sacred Toran",
        "tag": "Toran & Bandhanwar",
        "description": "Bring a traditional devotional touch to your car and home with the Rachayati Designs Bandhanwar. Designed with vibrant colours and spiritual motifs, these decorative torans are suitable for a car rear window, main door, pooja room, home temple, walls or festive spaces. The Bandhanwar measures 22 x 4.5 inches (25 x 4.5 inches for Jai Sri Ram) and is made from lightweight polyester, making it easy to hang and store when not in use. Available in English and Hindi designs with devotional expressions such as the Hare Krishna Mahamantra, Jai Sri Ram and Haribol.",
        "images": [
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Blue Green - Hindi/1.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Blue Green - Hindi/2.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Blue Green - Hindi/3.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Blue Green - Hindi/4.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Blue Green - Hindi/5.png"
        ],
        "isFeatured": false
    },
    {
        "id": "bandhanwar-mahamantra-bandhanwar-multicolor-english",
        "name": "Mahamantra Bandhanwar - Multicolor - English",
        "category": "bandhanwar",
        "categoryName": "Bandhanwar / Toran",
        "collection": null,
        "price": 250,
        "mrp": 350,
        "dimension": "22 x 4.5 in; 4.5 ft thread",
        "badge": "Bestseller",
        "tag": "Toran & Bandhanwar",
        "description": "Bring a traditional devotional touch to your car and home with the Rachayati Designs Bandhanwar. Designed with vibrant colours and spiritual motifs, these decorative torans are suitable for a car rear window, main door, pooja room, home temple, walls or festive spaces. The Bandhanwar measures 22 x 4.5 inches (25 x 4.5 inches for Jai Sri Ram) and is made from lightweight polyester, making it easy to hang and store when not in use. Available in English and Hindi designs with devotional expressions such as the Hare Krishna Mahamantra, Jai Sri Ram and Haribol.",
        "images": [
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Multicolor - English/1.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Multicolor - English/2.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Multicolor - English/3.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Multicolor - English/4.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Multicolor - English/5.png"
        ],
        "isFeatured": true
    },
    {
        "id": "bandhanwar-mahamantra-bandhanwar-multicolor-hindi",
        "name": "Mahamantra Bandhanwar - Multicolor -Hindi",
        "category": "bandhanwar",
        "categoryName": "Bandhanwar / Toran",
        "collection": null,
        "price": 250,
        "mrp": 350,
        "dimension": "22 x 4.5 in; 4.5 ft thread",
        "badge": "Bestseller",
        "tag": "Toran & Bandhanwar",
        "description": "Bring a traditional devotional touch to your car and home with the Rachayati Designs Bandhanwar. Designed with vibrant colours and spiritual motifs, these decorative torans are suitable for a car rear window, main door, pooja room, home temple, walls or festive spaces. The Bandhanwar measures 22 x 4.5 inches (25 x 4.5 inches for Jai Sri Ram) and is made from lightweight polyester, making it easy to hang and store when not in use. Available in English and Hindi designs with devotional expressions such as the Hare Krishna Mahamantra, Jai Sri Ram and Haribol.",
        "images": [
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Multicolor -Hindi/1.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Multicolor -Hindi/2.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Multicolor -Hindi/3.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Multicolor -Hindi/4.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Multicolor -Hindi/5.png"
        ],
        "isFeatured": false
    },
    {
        "id": "bandhanwar-mahamantra-bandhanwar-purple-pink-english",
        "name": "Mahamantra Bandhanwar - Purple Pink - English",
        "category": "bandhanwar",
        "categoryName": "Bandhanwar / Toran",
        "collection": null,
        "price": 250,
        "mrp": 350,
        "dimension": "22 x 4.5 in; 4.5 ft thread",
        "badge": "Sacred Toran",
        "tag": "Toran & Bandhanwar",
        "description": "Bring a traditional devotional touch to your car and home with the Rachayati Designs Bandhanwar. Designed with vibrant colours and spiritual motifs, these decorative torans are suitable for a car rear window, main door, pooja room, home temple, walls or festive spaces. The Bandhanwar measures 22 x 4.5 inches (25 x 4.5 inches for Jai Sri Ram) and is made from lightweight polyester, making it easy to hang and store when not in use. Available in English and Hindi designs with devotional expressions such as the Hare Krishna Mahamantra, Jai Sri Ram and Haribol.",
        "images": [
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Purple Pink - English/1.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Purple Pink - English/2.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Purple Pink - English/3.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Purple Pink - English/4.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Purple Pink - English/5.png"
        ],
        "isFeatured": false
    },
    {
        "id": "bandhanwar-mahamantra-bandhanwar-purple-pink-hindi",
        "name": "Mahamantra Bandhanwar - Purple Pink - Hindi",
        "category": "bandhanwar",
        "categoryName": "Bandhanwar / Toran",
        "collection": null,
        "price": 250,
        "mrp": 350,
        "dimension": "22 x 4.5 in; 4.5 ft thread",
        "badge": "Sacred Toran",
        "tag": "Toran & Bandhanwar",
        "description": "Bring a traditional devotional touch to your car and home with the Rachayati Designs Bandhanwar. Designed with vibrant colours and spiritual motifs, these decorative torans are suitable for a car rear window, main door, pooja room, home temple, walls or festive spaces. The Bandhanwar measures 22 x 4.5 inches (25 x 4.5 inches for Jai Sri Ram) and is made from lightweight polyester, making it easy to hang and store when not in use. Available in English and Hindi designs with devotional expressions such as the Hare Krishna Mahamantra, Jai Sri Ram and Haribol.",
        "images": [
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Purple Pink - Hindi/1.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Purple Pink - Hindi/2.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Purple Pink - Hindi/3.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Purple Pink - Hindi/4.png",
            "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Purple Pink - Hindi/5.png"
        ],
        "isFeatured": false
    },
    {
        "id": "magnet-hare-krishna-magnet-blue-mandala",
        "name": "Hare Krishna Magnet - Blue Mandala",
        "category": "fridge-magnet",
        "categoryName": "Fridge Magnets",
        "collection": null,
        "price": 70,
        "mrp": 100,
        "dimension": "3.5 in",
        "badge": "Devotional Art",
        "tag": "Fridge Magnet",
        "description": "Make everyday spaces a little more devotional with Rachayati Designs Fridge Magnets. Featuring colourful spiritual artwork and devotional designs, these magnets are a simple way to bring Krishna bhakti and traditional Indian aesthetics into your home. Each magnet measures 3.5 inches and is made from magnetized rubber. Use them on refrigerators and other suitable magnetic surfaces, or gift them to family, friends and devotees.",
        "images": [
            "Product Catalogue/Fridge Magnet/Hare Krishna Magnet - Blue Mandala/1.png",
            "Product Catalogue/Fridge Magnet/Hare Krishna Magnet - Blue Mandala/2.png",
            "Product Catalogue/Fridge Magnet/Hare Krishna Magnet - Blue Mandala/3.png",
            "Product Catalogue/Fridge Magnet/Hare Krishna Magnet - Blue Mandala/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "magnet-hare-krishna-magnet-green-mandala",
        "name": "Hare Krishna Magnet - Green Mandala",
        "category": "fridge-magnet",
        "categoryName": "Fridge Magnets",
        "collection": null,
        "price": 70,
        "mrp": 100,
        "dimension": "3.5 in",
        "badge": "Devotional Art",
        "tag": "Fridge Magnet",
        "description": "Make everyday spaces a little more devotional with Rachayati Designs Fridge Magnets. Featuring colourful spiritual artwork and devotional designs, these magnets are a simple way to bring Krishna bhakti and traditional Indian aesthetics into your home. Each magnet measures 3.5 inches and is made from magnetized rubber. Use them on refrigerators and other suitable magnetic surfaces, or gift them to family, friends and devotees.",
        "images": [
            "Product Catalogue/Fridge Magnet/Hare Krishna Magnet - Green Mandala/1.png",
            "Product Catalogue/Fridge Magnet/Hare Krishna Magnet - Green Mandala/2.png",
            "Product Catalogue/Fridge Magnet/Hare Krishna Magnet - Green Mandala/3.png",
            "Product Catalogue/Fridge Magnet/Hare Krishna Magnet - Green Mandala/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "magnet-hare-krishna-magnet-peacock",
        "name": "Hare Krishna Magnet - Peacock",
        "category": "fridge-magnet",
        "categoryName": "Fridge Magnets",
        "collection": null,
        "price": 70,
        "mrp": 100,
        "dimension": "3.5 in",
        "badge": "Bestseller",
        "tag": "Fridge Magnet",
        "description": "Make everyday spaces a little more devotional with Rachayati Designs Fridge Magnets. Featuring colourful spiritual artwork and devotional designs, these magnets are a simple way to bring Krishna bhakti and traditional Indian aesthetics into your home. Each magnet measures 3.5 inches and is made from magnetized rubber. Use them on refrigerators and other suitable magnetic surfaces, or gift them to family, friends and devotees.",
        "images": [
            "Product Catalogue/Fridge Magnet/Hare Krishna Magnet - Peacock/1.png",
            "Product Catalogue/Fridge Magnet/Hare Krishna Magnet - Peacock/2.png",
            "Product Catalogue/Fridge Magnet/Hare Krishna Magnet - Peacock/3.png",
            "Product Catalogue/Fridge Magnet/Hare Krishna Magnet - Peacock/4.png"
        ],
        "isFeatured": true
    },
    {
        "id": "magnet-hare-krishna-magnet-red-mandala",
        "name": "Hare Krishna Magnet - Red Mandala",
        "category": "fridge-magnet",
        "categoryName": "Fridge Magnets",
        "collection": null,
        "price": 70,
        "mrp": 100,
        "dimension": "3.5 in",
        "badge": "Devotional Art",
        "tag": "Fridge Magnet",
        "description": "Make everyday spaces a little more devotional with Rachayati Designs Fridge Magnets. Featuring colourful spiritual artwork and devotional designs, these magnets are a simple way to bring Krishna bhakti and traditional Indian aesthetics into your home. Each magnet measures 3.5 inches and is made from magnetized rubber. Use them on refrigerators and other suitable magnetic surfaces, or gift them to family, friends and devotees.",
        "images": [
            "Product Catalogue/Fridge Magnet/Hare Krishna Magnet - Red Mandala/1.png",
            "Product Catalogue/Fridge Magnet/Hare Krishna Magnet - Red Mandala/2.png",
            "Product Catalogue/Fridge Magnet/Hare Krishna Magnet - Red Mandala/3.png",
            "Product Catalogue/Fridge Magnet/Hare Krishna Magnet - Red Mandala/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "magnet-haribol-magnet",
        "name": "Haribol Magnet",
        "category": "fridge-magnet",
        "categoryName": "Fridge Magnets",
        "collection": null,
        "price": 70,
        "mrp": 100,
        "dimension": "3.5 in",
        "badge": "Devotional Art",
        "tag": "Fridge Magnet",
        "description": "Make everyday spaces a little more devotional with Rachayati Designs Fridge Magnets. Featuring colourful spiritual artwork and devotional designs, these magnets are a simple way to bring Krishna bhakti and traditional Indian aesthetics into your home. Each magnet measures 3.5 inches and is made from magnetized rubber. Use them on refrigerators and other suitable magnetic surfaces, or gift them to family, friends and devotees.",
        "images": [
            "Product Catalogue/Fridge Magnet/Haribol Magnet/1.png",
            "Product Catalogue/Fridge Magnet/Haribol Magnet/2.png",
            "Product Catalogue/Fridge Magnet/Haribol Magnet/3.png",
            "Product Catalogue/Fridge Magnet/Haribol Magnet/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "magnet-jagannath-magnet",
        "name": "Jagannath Magnet",
        "category": "fridge-magnet",
        "categoryName": "Fridge Magnets",
        "collection": null,
        "price": 70,
        "mrp": 100,
        "dimension": "3.5 in",
        "badge": "Bestseller",
        "tag": "Fridge Magnet",
        "description": "Make everyday spaces a little more devotional with Rachayati Designs Fridge Magnets. Featuring colourful spiritual artwork and devotional designs, these magnets are a simple way to bring Krishna bhakti and traditional Indian aesthetics into your home. Each magnet measures 3.5 inches and is made from magnetized rubber. Use them on refrigerators and other suitable magnetic surfaces, or gift them to family, friends and devotees.",
        "images": [
            "Product Catalogue/Fridge Magnet/Jagannath Magnet/1.png",
            "Product Catalogue/Fridge Magnet/Jagannath Magnet/2.png",
            "Product Catalogue/Fridge Magnet/Jagannath Magnet/3.png",
            "Product Catalogue/Fridge Magnet/Jagannath Magnet/4.png"
        ],
        "isFeatured": true
    },
    {
        "id": "magnet-mahamantra-spiral-magnet-english",
        "name": "Mahamantra Spiral Magnet - English",
        "category": "fridge-magnet",
        "categoryName": "Fridge Magnets",
        "collection": null,
        "price": 70,
        "mrp": 100,
        "dimension": "3.5 in",
        "badge": "Devotional Art",
        "tag": "Fridge Magnet",
        "description": "Make everyday spaces a little more devotional with Rachayati Designs Fridge Magnets. Featuring colourful spiritual artwork and devotional designs, these magnets are a simple way to bring Krishna bhakti and traditional Indian aesthetics into your home. Each magnet measures 3.5 inches and is made from magnetized rubber. Use them on refrigerators and other suitable magnetic surfaces, or gift them to family, friends and devotees.",
        "images": [
            "Product Catalogue/Fridge Magnet/Mahamantra Spiral Magnet - English/1.png",
            "Product Catalogue/Fridge Magnet/Mahamantra Spiral Magnet - English/2.png",
            "Product Catalogue/Fridge Magnet/Mahamantra Spiral Magnet - English/3.png",
            "Product Catalogue/Fridge Magnet/Mahamantra Spiral Magnet - English/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "magnet-mahamantra-spiral-magnet-hindi",
        "name": "Mahamantra Spiral Magnet - Hindi",
        "category": "fridge-magnet",
        "categoryName": "Fridge Magnets",
        "collection": null,
        "price": 70,
        "mrp": 100,
        "dimension": "3.5 in",
        "badge": "Devotional Art",
        "tag": "Fridge Magnet",
        "description": "Make everyday spaces a little more devotional with Rachayati Designs Fridge Magnets. Featuring colourful spiritual artwork and devotional designs, these magnets are a simple way to bring Krishna bhakti and traditional Indian aesthetics into your home. Each magnet measures 3.5 inches and is made from magnetized rubber. Use them on refrigerators and other suitable magnetic surfaces, or gift them to family, friends and devotees.",
        "images": [
            "Product Catalogue/Fridge Magnet/Mahamantra Spiral Magnet - Hindi/1.png",
            "Product Catalogue/Fridge Magnet/Mahamantra Spiral Magnet - Hindi/2.png",
            "Product Catalogue/Fridge Magnet/Mahamantra Spiral Magnet - Hindi/3.png",
            "Product Catalogue/Fridge Magnet/Mahamantra Spiral Magnet - Hindi/4.png"
        ],
        "isFeatured": true
    },
    {
        "id": "magnet-narasihma-dev-magnet",
        "name": "Narasihma Dev Magnet",
        "category": "fridge-magnet",
        "categoryName": "Fridge Magnets",
        "collection": null,
        "price": 70,
        "mrp": 100,
        "dimension": "3.5 in",
        "badge": "Devotional Art",
        "tag": "Fridge Magnet",
        "description": "Make everyday spaces a little more devotional with Rachayati Designs Fridge Magnets. Featuring colourful spiritual artwork and devotional designs, these magnets are a simple way to bring Krishna bhakti and traditional Indian aesthetics into your home. Each magnet measures 3.5 inches and is made from magnetized rubber. Use them on refrigerators and other suitable magnetic surfaces, or gift them to family, friends and devotees.",
        "images": [
            "Product Catalogue/Fridge Magnet/Narasihma Dev Magnet/1.png",
            "Product Catalogue/Fridge Magnet/Narasihma Dev Magnet/2.png",
            "Product Catalogue/Fridge Magnet/Narasihma Dev Magnet/3.png",
            "Product Catalogue/Fridge Magnet/Narasihma Dev Magnet/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "magnet-panch-tattva-magnet",
        "name": "Panch Tattva Magnet",
        "category": "fridge-magnet",
        "categoryName": "Fridge Magnets",
        "collection": null,
        "price": 70,
        "mrp": 100,
        "dimension": "3.5 in",
        "badge": "Devotional Art",
        "tag": "Fridge Magnet",
        "description": "Make everyday spaces a little more devotional with Rachayati Designs Fridge Magnets. Featuring colourful spiritual artwork and devotional designs, these magnets are a simple way to bring Krishna bhakti and traditional Indian aesthetics into your home. Each magnet measures 3.5 inches and is made from magnetized rubber. Use them on refrigerators and other suitable magnetic surfaces, or gift them to family, friends and devotees.",
        "images": [
            "Product Catalogue/Fridge Magnet/Panch Tattva Magnet/1.png",
            "Product Catalogue/Fridge Magnet/Panch Tattva Magnet/2.png",
            "Product Catalogue/Fridge Magnet/Panch Tattva Magnet/3.png",
            "Product Catalogue/Fridge Magnet/Panch Tattva Magnet/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "magnet-radha-govind-dev-magnet-blue",
        "name": "Radha Govind Dev Magnet - Blue",
        "category": "fridge-magnet",
        "categoryName": "Fridge Magnets",
        "collection": null,
        "price": 70,
        "mrp": 100,
        "dimension": "3.5 in",
        "badge": "Devotional Art",
        "tag": "Fridge Magnet",
        "description": "Make everyday spaces a little more devotional with Rachayati Designs Fridge Magnets. Featuring colourful spiritual artwork and devotional designs, these magnets are a simple way to bring Krishna bhakti and traditional Indian aesthetics into your home. Each magnet measures 3.5 inches and is made from magnetized rubber. Use them on refrigerators and other suitable magnetic surfaces, or gift them to family, friends and devotees.",
        "images": [
            "Product Catalogue/Fridge Magnet/Radha Govind Dev Magnet - Blue/1.png",
            "Product Catalogue/Fridge Magnet/Radha Govind Dev Magnet - Blue/2.png",
            "Product Catalogue/Fridge Magnet/Radha Govind Dev Magnet - Blue/3.png",
            "Product Catalogue/Fridge Magnet/Radha Govind Dev Magnet - Blue/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "magnet-radha-govind-dev-magnet-green",
        "name": "Radha Govind Dev Magnet - Green",
        "category": "fridge-magnet",
        "categoryName": "Fridge Magnets",
        "collection": null,
        "price": 70,
        "mrp": 100,
        "dimension": "3.5 in",
        "badge": "Devotional Art",
        "tag": "Fridge Magnet",
        "description": "Make everyday spaces a little more devotional with Rachayati Designs Fridge Magnets. Featuring colourful spiritual artwork and devotional designs, these magnets are a simple way to bring Krishna bhakti and traditional Indian aesthetics into your home. Each magnet measures 3.5 inches and is made from magnetized rubber. Use them on refrigerators and other suitable magnetic surfaces, or gift them to family, friends and devotees.",
        "images": [
            "Product Catalogue/Fridge Magnet/Radha Govind Dev Magnet - Green/1.png",
            "Product Catalogue/Fridge Magnet/Radha Govind Dev Magnet - Green/2.png",
            "Product Catalogue/Fridge Magnet/Radha Govind Dev Magnet - Green/3.png",
            "Product Catalogue/Fridge Magnet/Radha Govind Dev Magnet - Green/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "magnet-sri-radha-magnet",
        "name": "Sri Radha Magnet",
        "category": "fridge-magnet",
        "categoryName": "Fridge Magnets",
        "collection": null,
        "price": 70,
        "mrp": 100,
        "dimension": "3.5 in",
        "badge": "Devotional Art",
        "tag": "Fridge Magnet",
        "description": "Make everyday spaces a little more devotional with Rachayati Designs Fridge Magnets. Featuring colourful spiritual artwork and devotional designs, these magnets are a simple way to bring Krishna bhakti and traditional Indian aesthetics into your home. Each magnet measures 3.5 inches and is made from magnetized rubber. Use them on refrigerators and other suitable magnetic surfaces, or gift them to family, friends and devotees.",
        "images": [
            "Product Catalogue/Fridge Magnet/Sri Radha Magnet/1.png",
            "Product Catalogue/Fridge Magnet/Sri Radha Magnet/2.png",
            "Product Catalogue/Fridge Magnet/Sri Radha Magnet/3.png",
            "Product Catalogue/Fridge Magnet/Sri Radha Magnet/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "magnet-srila-prabhupada-magnet",
        "name": "Srila Prabhupada Magnet",
        "category": "fridge-magnet",
        "categoryName": "Fridge Magnets",
        "collection": null,
        "price": 70,
        "mrp": 100,
        "dimension": "3.5 in",
        "badge": "Devotional Art",
        "tag": "Fridge Magnet",
        "description": "Make everyday spaces a little more devotional with Rachayati Designs Fridge Magnets. Featuring colourful spiritual artwork and devotional designs, these magnets are a simple way to bring Krishna bhakti and traditional Indian aesthetics into your home. Each magnet measures 3.5 inches and is made from magnetized rubber. Use them on refrigerators and other suitable magnetic surfaces, or gift them to family, friends and devotees.",
        "images": [
            "Product Catalogue/Fridge Magnet/Srila Prabhupada Magnet/1.png",
            "Product Catalogue/Fridge Magnet/Srila Prabhupada Magnet/2.png",
            "Product Catalogue/Fridge Magnet/Srila Prabhupada Magnet/3.png",
            "Product Catalogue/Fridge Magnet/Srila Prabhupada Magnet/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "tulsi-embossed-collection-design-1",
        "name": "Tulsi Maharani Dress - Embossed Collection (Design 1)",
        "category": "tulsi-dress",
        "categoryName": "Tulsi Maharani Plant Dress",
        "collection": "Embossed Collection",
        "price": 250,
        "mrp": 350,
        "dimension": "Small: 6–8 in pots (24×12 in) / Medium: 9–11 in pots (20×10 in)",
        "sizes": {
            "Small": {
                "price": 250,
                "mrp": 350,
                "dimension": "Small: 6–8 in pots (24 in width × 12 in height, 38 in skirt)"
            },
            "Medium": {
                "price": 280,
                "mrp": 400,
                "dimension": "Medium: 9–11 in pots (20 in width × 10 in height, 32 in skirt)"
            }
        },
        "badge": "Sacred Seva",
        "tag": "Embossed Collection",
        "description": "The Rachayati Designs Tulsi Maharani Dress is a decorative plant skirt designed to adorn the base of your Tulsi plant pot. Inspired by traditional Indian clothing and devotional aesthetics, each dress adds colour, elegance and a festive touch to your Tulsi plant. Choose from Embossed, Satin and Zari fabric options in multiple designs. Small is suitable for 6, 7 and 8-inch flower pots, while Medium is suitable for 9, 10 and 11-inch flower pots. Please check your pot dimensions before ordering.",
        "images": [
            "Product Catalogue/Tulsi Maharani Dress/Embossed Collection/Design 1/1.png",
            "Product Catalogue/Tulsi Maharani Dress/Embossed Collection/Design 1/2.png",
            "Product Catalogue/Tulsi Maharani Dress/Embossed Collection/Design 1/3.png",
            "Product Catalogue/Tulsi Maharani Dress/Embossed Collection/Design 1/4.png"
        ],
        "isFeatured": true
    },
    {
        "id": "tulsi-embossed-collection-design-2",
        "name": "Tulsi Maharani Dress - Embossed Collection (Design 2)",
        "category": "tulsi-dress",
        "categoryName": "Tulsi Maharani Plant Dress",
        "collection": "Embossed Collection",
        "price": 250,
        "mrp": 350,
        "dimension": "Small: 6–8 in pots (24×12 in) / Medium: 9–11 in pots (20×10 in)",
        "sizes": {
            "Small": {
                "price": 250,
                "mrp": 350,
                "dimension": "Small: 6–8 in pots (24 in width × 12 in height, 38 in skirt)"
            },
            "Medium": {
                "price": 280,
                "mrp": 400,
                "dimension": "Medium: 9–11 in pots (20 in width × 10 in height, 32 in skirt)"
            }
        },
        "badge": "Sacred Seva",
        "tag": "Embossed Collection",
        "description": "The Rachayati Designs Tulsi Maharani Dress is a decorative plant skirt designed to adorn the base of your Tulsi plant pot. Inspired by traditional Indian clothing and devotional aesthetics, each dress adds colour, elegance and a festive touch to your Tulsi plant. Choose from Embossed, Satin and Zari fabric options in multiple designs. Small is suitable for 6, 7 and 8-inch flower pots, while Medium is suitable for 9, 10 and 11-inch flower pots. Please check your pot dimensions before ordering.",
        "images": [
            "Product Catalogue/Tulsi Maharani Dress/Embossed Collection/Design 2/1.png",
            "Product Catalogue/Tulsi Maharani Dress/Embossed Collection/Design 2/2.png",
            "Product Catalogue/Tulsi Maharani Dress/Embossed Collection/Design 2/3.png",
            "Product Catalogue/Tulsi Maharani Dress/Embossed Collection/Design 2/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "tulsi-embossed-collection-design-3",
        "name": "Tulsi Maharani Dress - Embossed Collection (Design 3)",
        "category": "tulsi-dress",
        "categoryName": "Tulsi Maharani Plant Dress",
        "collection": "Embossed Collection",
        "price": 250,
        "mrp": 350,
        "dimension": "Small: 6–8 in pots (24×12 in) / Medium: 9–11 in pots (20×10 in)",
        "sizes": {
            "Small": {
                "price": 250,
                "mrp": 350,
                "dimension": "Small: 6–8 in pots (24 in width × 12 in height, 38 in skirt)"
            },
            "Medium": {
                "price": 280,
                "mrp": 400,
                "dimension": "Medium: 9–11 in pots (20 in width × 10 in height, 32 in skirt)"
            }
        },
        "badge": "Sacred Seva",
        "tag": "Embossed Collection",
        "description": "The Rachayati Designs Tulsi Maharani Dress is a decorative plant skirt designed to adorn the base of your Tulsi plant pot. Inspired by traditional Indian clothing and devotional aesthetics, each dress adds colour, elegance and a festive touch to your Tulsi plant. Choose from Embossed, Satin and Zari fabric options in multiple designs. Small is suitable for 6, 7 and 8-inch flower pots, while Medium is suitable for 9, 10 and 11-inch flower pots. Please check your pot dimensions before ordering.",
        "images": [
            "Product Catalogue/Tulsi Maharani Dress/Embossed Collection/Design 3/1.png",
            "Product Catalogue/Tulsi Maharani Dress/Embossed Collection/Design 3/2.png",
            "Product Catalogue/Tulsi Maharani Dress/Embossed Collection/Design 3/3.png",
            "Product Catalogue/Tulsi Maharani Dress/Embossed Collection/Design 3/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "tulsi-satin-collection-design-1",
        "name": "Tulsi Maharani Dress - Satin Collection (Design 1)",
        "category": "tulsi-dress",
        "categoryName": "Tulsi Maharani Plant Dress",
        "collection": "Satin Collection",
        "price": 320,
        "mrp": 450,
        "dimension": "Small: 6–8 in pots (24×12 in) / Medium: 9–11 in pots (20×10 in)",
        "sizes": {
            "Small": {
                "price": 320,
                "mrp": 450,
                "dimension": "Small: 6–8 in pots (24 in width × 12 in height, 38 in skirt)"
            },
            "Medium": {
                "price": 350,
                "mrp": 480,
                "dimension": "Medium: 9–11 in pots (20 in width × 10 in height, 32 in skirt)"
            }
        },
        "badge": "Sacred Seva",
        "tag": "Satin Collection",
        "description": "The Rachayati Designs Tulsi Maharani Dress is a decorative plant skirt designed to adorn the base of your Tulsi plant pot. Inspired by traditional Indian clothing and devotional aesthetics, each dress adds colour, elegance and a festive touch to your Tulsi plant. Choose from Embossed, Satin and Zari fabric options in multiple designs. Small is suitable for 6, 7 and 8-inch flower pots, while Medium is suitable for 9, 10 and 11-inch flower pots. Please check your pot dimensions before ordering.",
        "images": [
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 1/1.png",
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 1/2.png",
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 1/3.png",
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 1/4.png"
        ],
        "isFeatured": true
    },
    {
        "id": "tulsi-satin-collection-design-2",
        "name": "Tulsi Maharani Dress - Satin Collection (Design 2)",
        "category": "tulsi-dress",
        "categoryName": "Tulsi Maharani Plant Dress",
        "collection": "Satin Collection",
        "price": 320,
        "mrp": 450,
        "dimension": "Small: 6–8 in pots (24×12 in) / Medium: 9–11 in pots (20×10 in)",
        "sizes": {
            "Small": {
                "price": 320,
                "mrp": 450,
                "dimension": "Small: 6–8 in pots (24 in width × 12 in height, 38 in skirt)"
            },
            "Medium": {
                "price": 350,
                "mrp": 480,
                "dimension": "Medium: 9–11 in pots (20 in width × 10 in height, 32 in skirt)"
            }
        },
        "badge": "Sacred Seva",
        "tag": "Satin Collection",
        "description": "The Rachayati Designs Tulsi Maharani Dress is a decorative plant skirt designed to adorn the base of your Tulsi plant pot. Inspired by traditional Indian clothing and devotional aesthetics, each dress adds colour, elegance and a festive touch to your Tulsi plant. Choose from Embossed, Satin and Zari fabric options in multiple designs. Small is suitable for 6, 7 and 8-inch flower pots, while Medium is suitable for 9, 10 and 11-inch flower pots. Please check your pot dimensions before ordering.",
        "images": [
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 2/1.png",
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 2/2.png",
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 2/3.png",
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 2/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "tulsi-satin-collection-design-3",
        "name": "Tulsi Maharani Dress - Satin Collection (Design 3)",
        "category": "tulsi-dress",
        "categoryName": "Tulsi Maharani Plant Dress",
        "collection": "Satin Collection",
        "price": 320,
        "mrp": 450,
        "dimension": "Small: 6–8 in pots (24×12 in) / Medium: 9–11 in pots (20×10 in)",
        "sizes": {
            "Small": {
                "price": 320,
                "mrp": 450,
                "dimension": "Small: 6–8 in pots (24 in width × 12 in height, 38 in skirt)"
            },
            "Medium": {
                "price": 350,
                "mrp": 480,
                "dimension": "Medium: 9–11 in pots (20 in width × 10 in height, 32 in skirt)"
            }
        },
        "badge": "Sacred Seva",
        "tag": "Satin Collection",
        "description": "The Rachayati Designs Tulsi Maharani Dress is a decorative plant skirt designed to adorn the base of your Tulsi plant pot. Inspired by traditional Indian clothing and devotional aesthetics, each dress adds colour, elegance and a festive touch to your Tulsi plant. Choose from Embossed, Satin and Zari fabric options in multiple designs. Small is suitable for 6, 7 and 8-inch flower pots, while Medium is suitable for 9, 10 and 11-inch flower pots. Please check your pot dimensions before ordering.",
        "images": [
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 3/1.png",
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 3/2.png",
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 3/3.png",
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 3/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "tulsi-satin-collection-design-4",
        "name": "Tulsi Maharani Dress - Satin Collection (Design 4)",
        "category": "tulsi-dress",
        "categoryName": "Tulsi Maharani Plant Dress",
        "collection": "Satin Collection",
        "price": 320,
        "mrp": 450,
        "dimension": "Small: 6–8 in pots (24×12 in) / Medium: 9–11 in pots (20×10 in)",
        "sizes": {
            "Small": {
                "price": 320,
                "mrp": 450,
                "dimension": "Small: 6–8 in pots (24 in width × 12 in height, 38 in skirt)"
            },
            "Medium": {
                "price": 350,
                "mrp": 480,
                "dimension": "Medium: 9–11 in pots (20 in width × 10 in height, 32 in skirt)"
            }
        },
        "badge": "Sacred Seva",
        "tag": "Satin Collection",
        "description": "The Rachayati Designs Tulsi Maharani Dress is a decorative plant skirt designed to adorn the base of your Tulsi plant pot. Inspired by traditional Indian clothing and devotional aesthetics, each dress adds colour, elegance and a festive touch to your Tulsi plant. Choose from Embossed, Satin and Zari fabric options in multiple designs. Small is suitable for 6, 7 and 8-inch flower pots, while Medium is suitable for 9, 10 and 11-inch flower pots. Please check your pot dimensions before ordering.",
        "images": [
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 4/1.png",
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 4/2.png",
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 4/3.png",
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 4/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "tulsi-satin-collection-design-5",
        "name": "Tulsi Maharani Dress - Satin Collection (Design 5)",
        "category": "tulsi-dress",
        "categoryName": "Tulsi Maharani Plant Dress",
        "collection": "Satin Collection",
        "price": 320,
        "mrp": 450,
        "dimension": "Small: 6–8 in pots (24×12 in) / Medium: 9–11 in pots (20×10 in)",
        "sizes": {
            "Small": {
                "price": 320,
                "mrp": 450,
                "dimension": "Small: 6–8 in pots (24 in width × 12 in height, 38 in skirt)"
            },
            "Medium": {
                "price": 350,
                "mrp": 480,
                "dimension": "Medium: 9–11 in pots (20 in width × 10 in height, 32 in skirt)"
            }
        },
        "badge": "Sacred Seva",
        "tag": "Satin Collection",
        "description": "The Rachayati Designs Tulsi Maharani Dress is a decorative plant skirt designed to adorn the base of your Tulsi plant pot. Inspired by traditional Indian clothing and devotional aesthetics, each dress adds colour, elegance and a festive touch to your Tulsi plant. Choose from Embossed, Satin and Zari fabric options in multiple designs. Small is suitable for 6, 7 and 8-inch flower pots, while Medium is suitable for 9, 10 and 11-inch flower pots. Please check your pot dimensions before ordering.",
        "images": [
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 5/1.png",
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 5/2.png",
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 5/3.png",
            "Product Catalogue/Tulsi Maharani Dress/Satin Collection/Design 5/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "tulsi-zari-collection-design-1",
        "name": "Tulsi Maharani Dress - Zari Collection (Design 1)",
        "category": "tulsi-dress",
        "categoryName": "Tulsi Maharani Plant Dress",
        "collection": "Zari Collection",
        "price": 370,
        "mrp": 500,
        "dimension": "Small: 6–8 in pots (24×12 in) / Medium: 9–11 in pots (20×10 in)",
        "sizes": {
            "Small": {
                "price": 370,
                "mrp": 500,
                "dimension": "Small: 6–8 in pots (24 in width × 12 in height, 38 in skirt)"
            },
            "Medium": {
                "price": 400,
                "mrp": 550,
                "dimension": "Medium: 9–11 in pots (20 in width × 10 in height, 32 in skirt)"
            }
        },
        "badge": "Sacred Seva",
        "tag": "Zari Collection",
        "description": "The Rachayati Designs Tulsi Maharani Dress is a decorative plant skirt designed to adorn the base of your Tulsi plant pot. Inspired by traditional Indian clothing and devotional aesthetics, each dress adds colour, elegance and a festive touch to your Tulsi plant. Choose from Embossed, Satin and Zari fabric options in multiple designs. Small is suitable for 6, 7 and 8-inch flower pots, while Medium is suitable for 9, 10 and 11-inch flower pots. Please check your pot dimensions before ordering.",
        "images": [
            "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 1/1.png",
            "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 1/2.png",
            "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 1/3.png",
            "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 1/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "tulsi-zari-collection-design-2",
        "name": "Tulsi Maharani Dress - Zari Collection (Design 2)",
        "category": "tulsi-dress",
        "categoryName": "Tulsi Maharani Plant Dress",
        "collection": "Zari Collection",
        "price": 370,
        "mrp": 500,
        "dimension": "Small: 6–8 in pots (24×12 in) / Medium: 9–11 in pots (20×10 in)",
        "sizes": {
            "Small": {
                "price": 370,
                "mrp": 500,
                "dimension": "Small: 6–8 in pots (24 in width × 12 in height, 38 in skirt)"
            },
            "Medium": {
                "price": 400,
                "mrp": 550,
                "dimension": "Medium: 9–11 in pots (20 in width × 10 in height, 32 in skirt)"
            }
        },
        "badge": "Sacred Seva",
        "tag": "Zari Collection",
        "description": "The Rachayati Designs Tulsi Maharani Dress is a decorative plant skirt designed to adorn the base of your Tulsi plant pot. Inspired by traditional Indian clothing and devotional aesthetics, each dress adds colour, elegance and a festive touch to your Tulsi plant. Choose from Embossed, Satin and Zari fabric options in multiple designs. Small is suitable for 6, 7 and 8-inch flower pots, while Medium is suitable for 9, 10 and 11-inch flower pots. Please check your pot dimensions before ordering.",
        "images": [
            "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 2/1.png",
            "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 2/2.png",
            "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 2/3.png",
            "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 2/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "tulsi-zari-collection-design-3",
        "name": "Tulsi Maharani Dress - Zari Collection (Design 3)",
        "category": "tulsi-dress",
        "categoryName": "Tulsi Maharani Plant Dress",
        "collection": "Zari Collection",
        "price": 370,
        "mrp": 500,
        "dimension": "Small: 6–8 in pots (24×12 in) / Medium: 9–11 in pots (20×10 in)",
        "sizes": {
            "Small": {
                "price": 370,
                "mrp": 500,
                "dimension": "Small: 6–8 in pots (24 in width × 12 in height, 38 in skirt)"
            },
            "Medium": {
                "price": 400,
                "mrp": 550,
                "dimension": "Medium: 9–11 in pots (20 in width × 10 in height, 32 in skirt)"
            }
        },
        "badge": "Sacred Seva",
        "tag": "Zari Collection",
        "description": "The Rachayati Designs Tulsi Maharani Dress is a decorative plant skirt designed to adorn the base of your Tulsi plant pot. Inspired by traditional Indian clothing and devotional aesthetics, each dress adds colour, elegance and a festive touch to your Tulsi plant. Choose from Embossed, Satin and Zari fabric options in multiple designs. Small is suitable for 6, 7 and 8-inch flower pots, while Medium is suitable for 9, 10 and 11-inch flower pots. Please check your pot dimensions before ordering.",
        "images": [
            "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 3/1.png",
            "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 3/2.png",
            "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 3/3.png",
            "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 3/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "tulsi-zari-collection-design-4",
        "name": "Tulsi Maharani Dress - Zari Collection (Design 4)",
        "category": "tulsi-dress",
        "categoryName": "Tulsi Maharani Plant Dress",
        "collection": "Zari Collection",
        "price": 370,
        "mrp": 500,
        "dimension": "Small: 6–8 in pots (24×12 in) / Medium: 9–11 in pots (20×10 in)",
        "sizes": {
            "Small": {
                "price": 370,
                "mrp": 500,
                "dimension": "Small: 6–8 in pots (24 in width × 12 in height, 38 in skirt)"
            },
            "Medium": {
                "price": 400,
                "mrp": 550,
                "dimension": "Medium: 9–11 in pots (20 in width × 10 in height, 32 in skirt)"
            }
        },
        "badge": "Sacred Seva",
        "tag": "Zari Collection",
        "description": "The Rachayati Designs Tulsi Maharani Dress is a decorative plant skirt designed to adorn the base of your Tulsi plant pot. Inspired by traditional Indian clothing and devotional aesthetics, each dress adds colour, elegance and a festive touch to your Tulsi plant. Choose from Embossed, Satin and Zari fabric options in multiple designs. Small is suitable for 6, 7 and 8-inch flower pots, while Medium is suitable for 9, 10 and 11-inch flower pots. Please check your pot dimensions before ordering.",
        "images": [
            "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 4/1.png",
            "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 4/2.png",
            "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 4/3.png",
            "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 4/4.png"
        ],
        "isFeatured": false
    },
    {
        "id": "car-hanging-jhulan-lila",
        "name": "Jhulan Lila",
        "category": "car-hanging",
        "categoryName": "Car Hanging Accessory",
        "collection": null,
        "price": 180,
        "mrp": 250,
        "dimension": "2.5 x 3.5 inches",
        "badge": "Divine Protection",
        "tag": "Car Hanging",
        "description": "Add a devotional touch to your drive with the Rachayati Designs Radha Krishna Car Hanging Accessory. Designed for the rearview mirror, the compact hanging ornament adds spiritual aesthetics to any vehicle.",
        "images": [
            "Product Catalogue/Car Hanging Accessory/Jhulan Lila/1.png",
            "Product Catalogue/Car Hanging Accessory/Jhulan Lila/2.png",
            "Product Catalogue/Car Hanging Accessory/Jhulan Lila/3.png"
        ],
        "isFeatured": true
    },
    {
        "id": "car-hanging-ras-lila",
        "name": "Ras Lila",
        "category": "car-hanging",
        "categoryName": "Car Hanging Accessory",
        "collection": null,
        "price": 140,
        "mrp": 200,
        "dimension": "3.5 x 5.5 inches",
        "badge": "Divine Protection",
        "tag": "Car Hanging",
        "description": "Add a devotional touch to your drive with the Rachayati Designs Radha Krishna Car Hanging Accessory. Designed for the rearview mirror, the compact hanging ornament adds spiritual aesthetics to any vehicle.",
        "images": [
            "Product Catalogue/Car Hanging Accessory/Ras Lila/1.png",
            "Product Catalogue/Car Hanging Accessory/Ras Lila/2.png",
            "Product Catalogue/Car Hanging Accessory/Ras Lila/3.png"
        ],
        "isFeatured": false
    },
    {
        "id": "car-dashboard-radha-govind-dev-car-dashboard-green",
        "name": "Radha Govind Dev Car Dashboard - Green",
        "category": "car-dashboard",
        "categoryName": "Car Dashboard Mandir",
        "collection": null,
        "price": 200,
        "mrp": 280,
        "dimension": "3 x 4 x 1.2 inches",
        "badge": "Sacred Journey",
        "tag": "Car Mandir",
        "description": "Carry the eternal blessings of Sri Radha Govind Dev Ji on every journey with this premium acrylic dashboard mandir. Beautifully UV-printed and sized to sit neatly on a car dashboard, it brings a peaceful and divine atmosphere to every drive.",
        "images": [
            "Product Catalogue/Car Dashboard/Radha Govind Dev Car Dashboard - Green/1.png",
            "Product Catalogue/Car Dashboard/Radha Govind Dev Car Dashboard - Green/2.png",
            "Product Catalogue/Car Dashboard/Radha Govind Dev Car Dashboard - Green/3.png"
        ],
        "isFeatured": true
    },
    {
        "id": "car-dashboard-radha-govind-dev-car-dashboard-pink",
        "name": "Radha Govind Dev Car Dashboard - Pink",
        "category": "car-dashboard",
        "categoryName": "Car Dashboard Mandir",
        "collection": null,
        "price": 200,
        "mrp": 280,
        "dimension": "3 x 4 x 1.2 inches",
        "badge": "Sacred Journey",
        "tag": "Car Mandir",
        "description": "Carry the eternal blessings of Sri Radha Govind Dev Ji on every journey with this premium acrylic dashboard mandir. Beautifully UV-printed and sized to sit neatly on a car dashboard, it brings a peaceful and divine atmosphere to every drive.",
        "images": [
            "Product Catalogue/Car Dashboard/Radha Govind Dev Car Dashboard - Pink/1.png",
            "Product Catalogue/Car Dashboard/Radha Govind Dev Car Dashboard - Pink/2.png",
            "Product Catalogue/Car Dashboard/Radha Govind Dev Car Dashboard - Pink/3.png"
        ],
        "isFeatured": false
    },
    {
        "id": "led-lit-mahamantra",
        "name": "Led Lit Mahamantra",
        "category": "led-mahamantra",
        "categoryName": "LED-lit Mahamantra",
        "collection": null,
        "price": 500,
        "mrp": 700,
        "dimension": "4.2 x 5 x 1.2 inches",
        "badge": "Luminous Darshan",
        "tag": "Acrylic Lamp",
        "description": "Bring home an auspicious glow with the Rachayati Designs LED-lit Hare Krishna Mahamantra. The clear acrylic panel features the Holy Mahamantra within a Vrindavan-inspired scene with warm ambient LED illumination, elevating home altars, mandirs, and living spaces.",
        "images": [
            "Product Catalogue/Led Lit Mahamantra/1.png",
            "Product Catalogue/Led Lit Mahamantra/2.png",
            "Product Catalogue/Led Lit Mahamantra/3.png"
        ],
        "isFeatured": true
    },
    {
        "id": "wall-hanging",
        "name": "Wall Hanging",
        "category": "wall-hanging",
        "categoryName": "Wall Hanging",
        "collection": null,
        "price": 300,
        "mrp": 500,
        "dimension": "11.5 x 9 inches",
        "badge": "Auspicious Decor",
        "tag": "Wall Hanging",
        "description": "Transform a home, office, shop or pooja space with this devotional three-panel wall hanging from Rachayati Designs. The upper panel presents sacred deity artwork featuring Sri Radha Govind, Sri Krishna Balaram, and Lord Jagannath, adorned with the complete sacred Maha Mantra.",
        "images": [
            "Product Catalogue/Wall Hanging/1.png",
            "Product Catalogue/Wall Hanging/2.png",
            "Product Catalogue/Wall Hanging/3.png"
        ],
        "isFeatured": true
    }
];

// ==========================================
// 2. GLOBAL STATE & LOCAL STORAGE
// ==========================================
const state = {
    currentCategory: 'all',
    searchQuery: '',
    sortBy: 'featured',
    cart: JSON.parse(localStorage.getItem('rachayati_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('rachayati_wishlist')) || [],
    activeModalProduct: null,
    activeMediaIndex: 0,
    selectedSize: 'Small', // for Tulsi dress modal
    
    // Dedicated product.html page state
    pageProduct: null,
    pageMediaIndex: 0,
    pageSelectedSize: 'Small',
    pageQty: 1
};

// DOM Elements Cache
const elements = {
    header: document.getElementById('header'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    searchToggleBtn: document.getElementById('searchToggleBtn'),
    headerSearchBar: document.getElementById('headerSearchBar'),
    globalSearchInput: document.getElementById('globalSearchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    
    // Badges & Drawers
    cartToggleBtn: document.getElementById('cartToggleBtn'),
    wishlistToggleBtn: document.getElementById('wishlistToggleBtn'),
    cartDrawer: document.getElementById('cartDrawer'),
    wishlistDrawer: document.getElementById('wishlistDrawer'),
    cartCloseBtn: document.getElementById('cartCloseBtn'),
    wishlistCloseBtn: document.getElementById('wishlistCloseBtn'),
    cartItemsContainer: document.getElementById('cartItemsContainer'),
    wishlistItemsContainer: document.getElementById('wishlistItemsContainer'),
    cartFooter: document.getElementById('cartFooter'),
    wishlistFooter: document.getElementById('wishlistFooter'),
    drawerCartCount: document.getElementById('drawerCartCount'),
    drawerWishlistCount: document.getElementById('drawerWishlistCount'),
    drawerCartTotal: document.getElementById('drawerCartTotal'),
    cartCount: document.getElementById('cartCount'),
    wishlistCount: document.getElementById('wishlistCount'),
    whatsappCheckoutBtn: document.getElementById('whatsappCheckoutBtn'),
    moveWishlistToCartBtn: document.getElementById('moveWishlistToCartBtn'),
    clearCartBtn: document.getElementById('clearCartBtn'),
    toastNotification: document.getElementById('toastNotification'),
    toastMessage: document.getElementById('toastMessage'),
    
    // Featured (index.html)
    featuredProductsGrid: document.getElementById('featuredProductsGrid'),
    
    // Shop Catalog (shop.html)
    shopProductsGrid: document.getElementById('shopProductsGrid'),
    shopEmptyState: document.getElementById('shopEmptyState'),
    shopSortSelect: document.getElementById('shopSortSelect'),
    shopCategoryFilters: document.getElementById('shopCategoryFilters'),
    
    // Product Detail Lightbox Modal (fallback/shared)
    productModal: document.getElementById('productModal'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalMainImage: document.getElementById('modalMainImage'),
    modalMainVideo: document.getElementById('modalMainVideo'),
    modalThumbnailsStrip: document.getElementById('modalThumbnailsStrip'),
    modalPrevMedia: document.getElementById('modalPrevMedia'),
    modalNextMedia: document.getElementById('modalNextMedia'),
    modalCategoryTag: document.getElementById('modalCategoryTag'),
    modalTitle: document.getElementById('modalTitle'),
    modalPrice: document.getElementById('modalPrice'),
    modalMrp: document.getElementById('modalMrp'),
    modalDescription: document.getElementById('modalDescription'),
    modalAddToCartBtn: document.getElementById('modalAddToCartBtn'),
    modalWishlistBtn: document.getElementById('modalWishlistBtn'),
    currentYear: document.getElementById('currentYear')
};

// ==========================================
// 3. UTILITY FUNCTIONS
// ==========================================
const WHATSAPP_PHONE = '919667748356';

function getWhatsAppUrl(customText) {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(customText)}`;
}

function getProductImagePath(product, index = 0) {
    if (!product || !product.images || product.images.length === 0) {
        return 'Logo.jpg';
    }
    const img = product.images[index] || product.images[0];
    return encodeURI(img);
}

function getVariantShortName(product) {
    let name = product.name;
    name = name.replace(/Fridge Magnet\s*-\s*/i, '');
    name = name.replace(/Bandhanwar\s*-\s*/i, '');
    name = name.replace(/\s*Bandhanwar/i, '');
    name = name.replace(/\s*Fridge Magnet/i, '');
    name = name.replace(/\s*Car Hanging Accessory/i, '');
    name = name.replace(/\s*Car Dashboard Mandir/i, '');
    return name.trim() || product.name;
}

// ==========================================
// 4. NAVIGATION & SEARCH
// ==========================================
function initNavigation() {
    if (elements.currentYear) {
        elements.currentYear.textContent = new Date().getFullYear();
    }
    
    if (elements.searchToggleBtn && elements.headerSearchBar) {
        elements.searchToggleBtn.addEventListener('click', () => {
            elements.headerSearchBar.classList.toggle('open');
            if (elements.headerSearchBar.classList.contains('open') && elements.globalSearchInput) {
                elements.globalSearchInput.focus();
            }
        });
    }
    
    if (elements.clearSearchBtn && elements.headerSearchBar) {
        elements.clearSearchBtn.addEventListener('click', () => {
            if (elements.globalSearchInput) elements.globalSearchInput.value = '';
            elements.headerSearchBar.classList.remove('open');
            if (elements.shopProductsGrid) {
                state.searchQuery = '';
                renderShopCatalog();
            }
        });
    }
    
    if (elements.globalSearchInput) {
        elements.globalSearchInput.addEventListener('input', (e) => {
            const val = e.target.value.trim();
            if (elements.shopProductsGrid) {
                state.searchQuery = val;
                renderShopCatalog();
            }
        });
        
        elements.globalSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = e.target.value.trim();
                if (query) {
                    window.location.href = `shop.html?search=${encodeURIComponent(query)}`;
                }
            }
        });
    }
    
    if (elements.mobileMenuBtn) {
        elements.mobileMenuBtn.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu) navMenu.classList.toggle('mobile-open');
        });
    }

    document.querySelectorAll('.nav-item.has-dropdown').forEach(item => {
        const toggleBtn = item.querySelector('.nav-dropdown-toggle');
        const arrow = item.querySelector('.dropdown-arrow');
        const link = item.querySelector('.nav-link');

        const toggleDropdown = (e) => {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            item.classList.toggle('dropdown-open');
        };

        if (toggleBtn) {
            toggleBtn.addEventListener('click', toggleDropdown);
            toggleBtn.addEventListener('touchend', (e) => {
                toggleDropdown(e);
            });
        }

        if (arrow && arrow !== toggleBtn) {
            arrow.addEventListener('click', toggleDropdown);
            arrow.addEventListener('touchend', (e) => {
                toggleDropdown(e);
            });
        }

        if (link) {
            link.addEventListener('click', (e) => {
                if (e.target.closest('.dropdown-arrow') || e.target.closest('.nav-dropdown-toggle')) {
                    toggleDropdown(e);
                }
            });
        }
    });
}

// ==========================================
// 5. FEATURED COLLECTION (index.html)
// ==========================================
function renderFeaturedCollection() {
    if (!elements.featuredProductsGrid) return;
    
    const collectionsList = [
        {
            title: "Bandhanwar",
            badge: "8 Designs Available",
            featuredItem: "Mahamantra Bandhanwar - Multicolor",
            image: "Product Catalogue/Bandhanwar/Mahamantra Bandhanwar - Multicolor - English/1.png",
            shopCategory: "bandhanwar",
            countText: "All Bandhanwars (8)",
            sampleProductUrl: "product.html?id=bandhanwar-mahamantra-bandhanwar-multicolor-english"
        },
        {
            title: "Fridge Magnets",
            badge: "14 Designs Available",
            featuredItem: "Jagannath Magnet",
            image: "Product Catalogue/Fridge Magnet/Jagannath Magnet/1.png",
            shopCategory: "fridge-magnet",
            countText: "All Magnets (14)",
            sampleProductUrl: "product.html?id=magnet-jagannath-magnet"
        },
        {
            title: "Tulsi Maharani Dress",
            badge: "12 Designs Available",
            featuredItem: "Tulsi Maharani Dress - Zari Collection",
            image: "Product Catalogue/Tulsi Maharani Dress/Zari Collection/Design 4/1.png",
            shopCategory: "tulsi-dress",
            countText: "All Tulsi Dresses (12)",
            sampleProductUrl: "product.html?id=tulsi-zari-collection-design-4"
        },
        {
            title: "Led Lit Mahamantra",
            badge: "Luminous Darshan",
            featuredItem: "Led Lit Mahamantra",
            image: "Product Catalogue/Led Lit Mahamantra/1.png",
            shopCategory: "led-mahamantra",
            countText: "View Illumination",
            sampleProductUrl: "product.html?id=led-lit-mahamantra"
        },
        {
            title: "Sacred Wall Hanging",
            badge: "Auspicious Home Decor",
            featuredItem: "Sri Radha Krishna Wall Hanging",
            image: "Product Catalogue/Wall Hanging/1.png",
            shopCategory: "wall-hanging",
            countText: "Sacred Wall Hangings",
            sampleProductUrl: "product.html?id=wall-hanging"
        },
        {
            title: "Car Dashboard Keepsake",
            badge: "Divine Travel Blessings",
            featuredItem: "Radha Govind Dev Car Dashboard",
            image: "Product Catalogue/Car Dashboard/Radha Govind Dev Car Dashboard - Green/1.png",
            shopCategory: "car-dashboard",
            countText: "Car Keepsakes (2)",
            sampleProductUrl: "product.html?id=car-dashboard-radha-govind-dev-car-dashboard-green"
        },
        {
            title: "Car Hanging Accessory",
            badge: "2 Designs Available",
            featuredItem: "Ras Lila",
            image: "Product Catalogue/Car Hanging Accessory/Ras Lila/1.png",
            shopCategory: "car-hanging",
            countText: "All Car Hangings (2)",
            sampleProductUrl: "product.html?id=car-hanging-ras-lila"
        }
    ];

    elements.featuredProductsGrid.className = "collections-grid";
    elements.featuredProductsGrid.innerHTML = collectionsList.map(col => `
        <div class="collection-card" onclick="location.href='${col.sampleProductUrl}'">
            <div class="collection-card-media">
                <img src="${col.image}" alt="${col.title}" class="collection-card-img" onerror="this.src='Logo.jpg'">
                <span class="collection-card-badge">${col.badge}</span>
            </div>
            <div class="collection-card-body">
                <div>
                    <h2 class="collection-category-title">${col.title}</h2>
                    <p class="collection-featured-title">
                        <i class="fa-solid fa-tag gold-text"></i>
                        <span>${col.featuredItem}</span>
                    </p>
                </div>
                <div class="collection-card-footer">
                    <span class="collection-browse-link" onclick="event.stopPropagation(); location.href='shop.html?category=${col.shopCategory}'">
                        ${col.countText} <i class="fa-solid fa-arrow-right"></i>
                    </span>
                    <a href="${col.sampleProductUrl}" class="collection-btn-item">
                        View Item <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    `).join('');
}

// ==========================================
// 6. SHOP PAGE CATALOG RENDERER (shop.html)
// ==========================================
function getFilteredShopProducts() {
    let filtered = [...PRODUCTS_DATA];
    
    if (state.currentCategory !== 'all') {
        filtered = filtered.filter(item => {
            if (item.category === state.currentCategory) return true;
            if (state.currentCategory === 'tulsi-embossed' && item.collection === 'Embossed Collection') return true;
            if (state.currentCategory === 'tulsi-satin' && item.collection === 'Satin Collection') return true;
            if (state.currentCategory === 'tulsi-zari' && item.collection === 'Zari Collection') return true;
            return false;
        });
    }
    
    if (state.searchQuery.trim() !== '') {
        const q = state.searchQuery.toLowerCase().trim();
        filtered = filtered.filter(item => 
            item.name.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q) ||
            item.tag.toLowerCase().includes(q) ||
            item.categoryName.toLowerCase().includes(q) ||
            (item.dimension && item.dimension.toLowerCase().includes(q)) ||
            (item.collection && item.collection.toLowerCase().includes(q))
        );
    }
    
    if (state.sortBy === 'name-asc') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (state.sortBy === 'name-desc') {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
    } else if (state.sortBy === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    }
    
    return filtered;
}

function updateCategoryCounts() {
    const counts = {
        all: PRODUCTS_DATA.length,
        bandhanwar: PRODUCTS_DATA.filter(p => p.category === 'bandhanwar').length,
        'fridge-magnet': PRODUCTS_DATA.filter(p => p.category === 'fridge-magnet').length,
        'tulsi-dress': PRODUCTS_DATA.filter(p => p.category === 'tulsi-dress').length,
        'led-mahamantra': PRODUCTS_DATA.filter(p => p.category === 'led-mahamantra').length,
        'wall-hanging': PRODUCTS_DATA.filter(p => p.category === 'wall-hanging').length,
        'car-dashboard': PRODUCTS_DATA.filter(p => p.category === 'car-dashboard').length,
        'car-hanging': PRODUCTS_DATA.filter(p => p.category === 'car-hanging').length,
    };
    
    const countAll = document.getElementById('shopCountAll');
    const countBandhanwar = document.getElementById('shopCountBandhanwar');
    const countFridgeMagnet = document.getElementById('shopCountFridgeMagnet');
    const countTulsiDress = document.getElementById('shopCountTulsiDress');
    const countLedMahamantra = document.getElementById('shopCountLedMahamantra');
    const countWallHanging = document.getElementById('shopCountWallHanging');
    const countCarDashboard = document.getElementById('shopCountCarDashboard');
    const countCarHanging = document.getElementById('shopCountCarHanging');
    
    if (countAll) countAll.textContent = counts.all;
    if (countBandhanwar) countBandhanwar.textContent = counts.bandhanwar;
    if (countFridgeMagnet) countFridgeMagnet.textContent = counts['fridge-magnet'];
    if (countTulsiDress) countTulsiDress.textContent = counts['tulsi-dress'];
    if (countLedMahamantra) countLedMahamantra.textContent = counts['led-mahamantra'];
    if (countWallHanging) countWallHanging.textContent = counts['wall-hanging'];
    if (countCarDashboard) countCarDashboard.textContent = counts['car-dashboard'];
    if (countCarHanging) countCarHanging.textContent = counts['car-hanging'];
}

function updateCategoryPillsUI() {
    if (!elements.shopCategoryFilters) return;
    document.querySelectorAll('.shop-pill-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === state.currentCategory);
    });
}

function renderShopCatalog() {
    if (!elements.shopProductsGrid) return;
    
    const products = getFilteredShopProducts();
    
    if (products.length === 0) {
        elements.shopProductsGrid.innerHTML = '';
        if (elements.shopEmptyState) elements.shopEmptyState.style.display = 'block';
        return;
    }
    
    if (elements.shopEmptyState) elements.shopEmptyState.style.display = 'none';
    
    elements.shopProductsGrid.innerHTML = products.map(item => {
        const isWishlisted = state.wishlist.some(w => w.id === item.id);
        const imgSrc = getProductImagePath(item, 0);
        const categoryLabel = item.collection 
            ? `${item.categoryName} • ${item.collection}` 
            : item.categoryName;
        
        const catVariantCount = PRODUCTS_DATA.filter(p => p.category === item.category).length;
        
        return `
            <div class="shop-card" onclick="window.location.href='product.html?id=${item.id}'">
                <div class="shop-card-media">
                    <img src="${imgSrc}" alt="${item.name}" class="shop-card-img" loading="lazy" onerror="this.src='Logo.jpg'">
                    <span class="shop-card-tag">${item.tag}</span>
                    <button class="shop-card-wishlist ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist('${item.id}', event)" title="Save to Wishlist">
                        <i class="${isWishlisted ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                </div>
                <div class="shop-card-body">
                    <span class="shop-card-category">${categoryLabel}</span>
                    <h3 class="shop-card-title">${item.name}</h3>
                    <div class="shop-card-dimension" title="Product Dimension">
                        <i class="fa-solid fa-ruler-combined"></i>
                        <span>${item.dimension}</span>
                    </div>
                    <p class="shop-card-desc">${item.description}</p>
                    <div class="shop-card-footer">
                        <div class="shop-card-price-block">
                            <span class="shop-card-price">₹${item.price}</span>
                            <span class="shop-card-mrp">₹${item.mrp}</span>
                        </div>
                        <div class="shop-card-actions" onclick="event.stopPropagation()">
                            <button class="shop-btn-quickview" onclick="event.stopPropagation(); window.location.href='product.html?id=${item.id}'">
                                <i class="fa-solid fa-shapes"></i> View ${catVariantCount > 1 ? `${catVariantCount} Designs` : 'Details'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================================================
// 7. DEDICATED PRODUCT PAGE LOGIC (product.html)
// Amazon-Style Fixed Variant Switcher:
// ALL designs are permanently positioned in a fixed grid.
// Clicking ANY design updates photo, title, price, and dimensions IN PLACE
// with ZERO jumping, shifting, or scrolling of the design cards.
// ==========================================================================
function initProductDetailPage() {
    const pageContainer = document.getElementById('productDetailPage');
    if (!pageContainer) return;
    
    // 1. Get product from URL parameter ?id=...
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    const currentProduct = PRODUCTS_DATA.find(p => p.id === productId) || PRODUCTS_DATA[0];
    
    state.pageProduct = currentProduct;
    state.pageMediaIndex = 0;
    state.pageSelectedSize = 'Small';
    state.pageQty = 1;
    
    // 2. Initial render of the page
    renderPageProductData(currentProduct);
    renderPageGallery();
    renderPageFixedVariantsGrid(currentProduct);
    
    // 3. Attach gallery arrows and quantity listeners
    setupPageInteractiveControls();
}

function renderPageProductData(product) {
    // Page Title & Meta
    document.title = `${product.name} | Rachayati Designs`;
    const metaTitle = document.getElementById('pageMetaTitle');
    if (metaTitle) metaTitle.textContent = `${product.name} | Rachayati Designs`;
    
    // Breadcrumbs
    const breadCategoryLink = document.getElementById('breadCategoryLink');
    const breadProductName = document.getElementById('breadProductName');
    if (breadCategoryLink) {
        breadCategoryLink.textContent = product.categoryName;
        breadCategoryLink.href = `shop.html?category=${product.category}`;
    }
    if (breadProductName) {
        breadProductName.textContent = product.name;
    }
    
    // Category Badge & Title
    const badgeEl = document.getElementById('pageCategoryBadge');
    if (badgeEl) {
        badgeEl.textContent = product.collection ? `${product.categoryName} • ${product.collection}` : product.categoryName;
    }
    const titleEl = document.getElementById('pageProductTitle');
    if (titleEl) titleEl.textContent = product.name;
    
    // Price & MRP
    updatePagePriceAndDimensions();
    
    // Description
    const descEl = document.getElementById('pageDescription');
    if (descEl) descEl.textContent = product.description;
    
    // Tulsi Maharani Dress Size Options Visibility
    const sizeWrap = document.getElementById('pageSizeSelectorWrap');
    if (sizeWrap) {
        if (product.sizes) {
            sizeWrap.style.display = 'block';
            const smallPriceEl = document.getElementById('sizeSmallPrice');
            const medPriceEl = document.getElementById('sizeMediumPrice');
            if (smallPriceEl) smallPriceEl.textContent = `₹${product.sizes.Small.price}`;
            if (medPriceEl) medPriceEl.textContent = `₹${product.sizes.Medium.price}`;
        } else {
            sizeWrap.style.display = 'none';
        }
    }
    
    // WhatsApp Direct Order button href
    updatePageWhatsAppUrl();
    
    // Wishlist UI
    updatePageWishlistUI();
}

function updatePagePriceAndDimensions() {
    const product = state.pageProduct;
    if (!product) return;
    
    let price = product.price;
    let mrp = product.mrp;
    let dim = product.dimension;
    
    if (product.sizes && product.sizes[state.pageSelectedSize]) {
        price = product.sizes[state.pageSelectedSize].price;
        mrp = product.sizes[state.pageSelectedSize].mrp;
        dim = product.sizes[state.pageSelectedSize].dimension;
    }
    
    const priceEl = document.getElementById('pagePrice');
    const mrpEl = document.getElementById('pageMrp');
    const discountEl = document.getElementById('pageDiscountTag');
    const dimTextEl = document.getElementById('pageDimText');
    
    if (priceEl) priceEl.textContent = price;
    if (mrpEl) mrpEl.textContent = `₹${mrp}`;
    
    if (discountEl && mrp > price) {
        const savings = mrp - price;
        const pct = Math.round((savings / mrp) * 100);
        discountEl.textContent = `Save ₹${savings} (${pct}% OFF)`;
    }
    
    if (dimTextEl) dimTextEl.textContent = dim;
}

function updatePageWhatsAppUrl() {
    const waBtn = document.getElementById('pageWhatsAppBtn');
    if (!waBtn || !state.pageProduct) return;
    
    const product = state.pageProduct;
    let price = product.price;
    let sizeNote = '';
    
    if (product.sizes && product.sizes[state.pageSelectedSize]) {
        price = product.sizes[state.pageSelectedSize].price;
        sizeNote = ` (Size: ${state.pageSelectedSize} - ${product.sizes[state.pageSelectedSize].dimension})`;
    }
    
    const qty = state.pageQty || 1;
    const msg = `Namaste Rachayati Designs! 🙏\n\nI would like to order:\n• *${product.name}*${sizeNote}\n• Quantity: ${qty}\n• Price: ₹${price * qty} (₹${price} each)\n• Category: ${product.categoryName}\n\nPlease confirm availability and payment details. Thank you!`;
    
    waBtn.href = getWhatsAppUrl(msg);
}

function updatePageWishlistUI() {
    const btn = document.getElementById('pageWishlistBtn');
    if (!btn || !state.pageProduct) return;
    const isWish = state.wishlist.some(w => w.id === state.pageProduct.id);
    btn.classList.toggle('active', isWish);
    btn.innerHTML = `<i class="${isWish ? 'fa-solid' : 'fa-regular'} fa-heart"></i>`;
}

// ==========================================================================
// FIXED DESIGN VARIANTS GRID
// Renders the designs in this category into a permanent, fixed-position grid.
// Clicking a card highlights it in place without moving or scrolling any cards.
// ==========================================================================
function renderPageFixedVariantsGrid(currentProduct) {
    const container = document.getElementById('pageVariantsSection');
    if (!container) return;
    
    // Find all products in the same category
    const categoryProducts = PRODUCTS_DATA.filter(p => p.category === currentProduct.category);
    
    if (categoryProducts.length <= 1) {
        container.style.display = 'none';
        container.innerHTML = '';
        return;
    }
    
    container.style.display = 'block';
    
    // If Tulsi Maharani Dress: show all 12 designs organized in clean fixed rows by Collection
    if (currentProduct.category === 'tulsi-dress') {
        const collections = ['Embossed Collection', 'Satin Collection', 'Zari Collection'];
        
        container.innerHTML = `
            <div class="page-variants-header">
                <div>
                    <span class="page-variants-label">Design / Style:</span>
                    <strong class="page-variants-selected-name" id="pageActiveDesignName">${currentProduct.name}</strong>
                </div>
                <span class="page-variants-count-badge">12 Devotional Designs</span>
            </div>
            
            ${collections.map(colName => {
                const prods = categoryProducts.filter(p => p.collection === colName);
                return `
                    <div style="margin-top: 14px; margin-bottom: 6px;">
                        <span style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; color: var(--gold-primary); letter-spacing: 0.5px;">${colName}</span>
                    </div>
                    <div class="page-variants-grid">
                        ${prods.map(p => {
                            const isActive = p.id === currentProduct.id;
                            const thumbImg = getProductImagePath(p, 0);
                            const shortName = p.name.split('(')[1]?.replace(')', '') || p.name;
                            
                            return `
                                <div class="amazon-page-variant-card ${isActive ? 'active' : ''}" 
                                     data-id="${p.id}" 
                                     onclick="selectPageProductVariant('${p.id}')" 
                                     title="${p.name}">
                                    <div class="page-variant-thumb-wrap">
                                        <img src="${thumbImg}" alt="${p.name}" class="page-variant-thumb" onerror="this.src='Logo.jpg'">
                                    </div>
                                    <span class="page-variant-title">${shortName}</span>
                                    <span class="page-variant-price">₹${p.price}</span>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `;
            }).join('')}
        `;
    } else {
        // Standard Amazon-Style Fixed Grid for other categories (Bandhanwars, Fridge Magnets, etc.)
        container.innerHTML = `
            <div class="page-variants-header">
                <div>
                    <span class="page-variants-label">Design / Style:</span>
                    <strong class="page-variants-selected-name" id="pageActiveDesignName">${currentProduct.name}</strong>
                </div>
                <span class="page-variants-count-badge">${categoryProducts.length} Designs</span>
            </div>
            <div class="page-variants-grid" id="pageVariantsGrid">
                ${categoryProducts.map(p => {
                    const isActive = p.id === currentProduct.id;
                    const thumbImg = getProductImagePath(p, 0);
                    const shortTitle = getVariantShortName(p);
                    
                    return `
                        <div class="amazon-page-variant-card ${isActive ? 'active' : ''}" 
                             data-id="${p.id}" 
                             onclick="selectPageProductVariant('${p.id}')" 
                             title="${p.name}">
                            <div class="page-variant-thumb-wrap">
                                <img src="${thumbImg}" alt="${p.name}" class="page-variant-thumb" onerror="this.src='Logo.jpg'">
                            </div>
                            <span class="page-variant-title">${shortTitle}</span>
                            <span class="page-variant-price">₹${p.price}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        `;
    }
}

// ==========================================================================
// SELECT VARIANT ON PRODUCT PAGE:
// CRITICAL: All design card positions stay 100% FIXED!
// Zero layout shift, zero jumping, zero auto-scrolling.
// Only the active card border updates, and the gallery/info updates seamlessly.
// ==========================================================================
function selectPageProductVariant(productId) {
    const newProduct = PRODUCTS_DATA.find(p => p.id === productId);
    if (!newProduct) return;
    
    state.pageProduct = newProduct;
    state.pageMediaIndex = 0;
    
    // 1. Update the URL in browser address bar without reloading
    window.history.replaceState(null, '', `product.html?id=${newProduct.id}`);
    
    // 2. TOGGLE ACTIVE CLASS ONLY - ZERO DOM REBUILDS, ZERO POSITION CHANGES
    document.querySelectorAll('.amazon-page-variant-card').forEach(card => {
        const isMatch = card.dataset.id === productId;
        card.classList.toggle('active', isMatch);
    });
    
    // 3. Update the displayed selected design name in the header
    const nameEl = document.getElementById('pageActiveDesignName');
    if (nameEl) nameEl.textContent = newProduct.name;
    
    // 4. Update product title, price, dimensions, description
    renderPageProductData(newProduct);
    
    // 5. Update gallery photos (all ordered 1.png, 2.png, 3.png...)
    renderPageGallery();
}

// ==========================================================================
// PRODUCT PAGE GALLERY (All photos numbered 1, 2, 3...)
// ==========================================================================
function renderPageGallery() {
    const product = state.pageProduct;
    if (!product) return;
    
    const mainImg = document.getElementById('pageMainImage');
    const thumbsStrip = document.getElementById('pageThumbsStrip');
    
    if (!mainImg || !thumbsStrip) return;
    
    const images = product.images && product.images.length > 0 
        ? product.images 
        : ['Logo.jpg'];
    
    // Set main image
    const activeImgSrc = getProductImagePath(product, state.pageMediaIndex);
    mainImg.src = activeImgSrc;
    mainImg.alt = `${product.name} - View ${state.pageMediaIndex + 1}`;
    
    // Render ordered thumbnail buttons (1, 2, 3...)
    thumbsStrip.innerHTML = images.map((img, idx) => {
        const isActive = idx === state.pageMediaIndex;
        const encodedSrc = encodeURI(img);
        
        return `
            <button class="page-thumb-btn ${isActive ? 'active' : ''}" 
                    onclick="switchPageGalleryMedia(${idx})" 
                    title="View Photo ${idx + 1}">
                <img src="${encodedSrc}" alt="${product.name} thumb ${idx + 1}" onerror="this.src='Logo.jpg'">
            </button>
        `;
    }).join('');
}

function switchPageGalleryMedia(index) {
    const product = state.pageProduct;
    if (!product || !product.images || product.images.length === 0) return;
    
    state.pageMediaIndex = (index + product.images.length) % product.images.length;
    
    const mainImg = document.getElementById('pageMainImage');
    if (mainImg) {
        mainImg.style.opacity = '0.3';
        setTimeout(() => {
            mainImg.src = getProductImagePath(product, state.pageMediaIndex);
            mainImg.style.opacity = '1';
        }, 120);
    }
    
    // Update active thumb
    document.querySelectorAll('.page-thumb-btn').forEach((btn, idx) => {
        btn.classList.toggle('active', idx === state.pageMediaIndex);
    });
}

function selectPageSize(sizeName) {
    state.pageSelectedSize = sizeName;
    updatePagePriceAndDimensions();
    updatePageWhatsAppUrl();
    
    const smallBtn = document.getElementById('sizeSmallBtn');
    const medBtn = document.getElementById('sizeMediumBtn');
    const labelHint = document.getElementById('selectedSizeLabel');
    
    if (smallBtn) smallBtn.classList.toggle('active', sizeName === 'Small');
    if (medBtn) medBtn.classList.toggle('active', sizeName === 'Medium');
    if (labelHint) labelHint.textContent = sizeName;
}

function setupPageInteractiveControls() {
    const prevBtn = document.getElementById('pagePrevMedia');
    const nextBtn = document.getElementById('pageNextMedia');
    if (prevBtn) prevBtn.addEventListener('click', () => switchPageGalleryMedia(state.pageMediaIndex - 1));
    if (nextBtn) nextBtn.addEventListener('click', () => switchPageGalleryMedia(state.pageMediaIndex + 1));
    
    const minusBtn = document.getElementById('qtyMinusBtn');
    const plusBtn = document.getElementById('qtyPlusBtn');
    const qtyVal = document.getElementById('pageQtyVal');
    
    if (minusBtn && plusBtn && qtyVal) {
        minusBtn.addEventListener('click', () => {
            if (state.pageQty > 1) {
                state.pageQty--;
                qtyVal.textContent = state.pageQty;
                updatePageWhatsAppUrl();
            }
        });
        plusBtn.addEventListener('click', () => {
            state.pageQty++;
            qtyVal.textContent = state.pageQty;
            updatePageWhatsAppUrl();
        });
    }
    
    const addCartBtn = document.getElementById('pageAddToCartBtn');
    if (addCartBtn) {
        addCartBtn.addEventListener('click', () => {
            if (state.pageProduct) {
                addToCart(state.pageProduct, state.pageQty || 1, state.pageSelectedSize);
            }
        });
    }
    
    const wishBtn = document.getElementById('pageWishlistBtn');
    if (wishBtn) {
        wishBtn.addEventListener('click', () => {
            if (state.pageProduct) {
                toggleWishlist(state.pageProduct.id);
                updatePageWishlistUI();
            }
        });
    }
}



// ==========================================
// 8. PRODUCT LIGHTBOX MODAL (Fallback)
// ==========================================
function openProductModal(productId) {
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;
    
    // Redirect to dedicated product page directly!
    window.location.href = `product.html?id=${product.id}`;
}

// ==========================================
// 9. WISHLIST & SHOPPING CART
// ==========================================
function toggleWishlist(productId, event) {
    if (event) event.stopPropagation();
    
    const index = state.wishlist.findIndex(w => w.id === productId);
    const product = PRODUCTS_DATA.find(p => p.id === productId);
    if (!product) return;
    
    if (index > -1) {
        state.wishlist.splice(index, 1);
        showToast(`Removed "${product.name}" from Wishlist`);
    } else {
        state.wishlist.push({
            id: product.id,
            name: product.name,
            price: product.price,
            mrp: product.mrp,
            image: getProductImagePath(product, 0)
        });
        showToast(`Saved "${product.name}" to Wishlist!`);
    }
    
    localStorage.setItem('rachayati_wishlist', JSON.stringify(state.wishlist));
    updateBadgeCounts();
    renderWishlistDrawer();
    
    // Update shop catalog buttons
    if (elements.shopProductsGrid) {
        renderShopCatalog();
    }
}

function addToCart(product, quantity = 1, size = 'Small') {
    if (!product) return;
    
    let price = product.price;
    let sizeSuffix = '';
    const cartItemId = product.sizes ? `${product.id}-${size}` : product.id;
    
    if (product.sizes && product.sizes[size]) {
        price = product.sizes[size].price;
        sizeSuffix = ` (${size} - ${product.sizes[size].dimension})`;
    }
    
    const existingIndex = state.cart.findIndex(c => c.id === cartItemId);
    
    if (existingIndex > -1) {
        state.cart[existingIndex].quantity += quantity;
    } else {
        state.cart.push({
            id: cartItemId,
            originalProductId: product.id,
            name: `${product.name}${sizeSuffix}`,
            price: price,
            mrp: product.mrp,
            image: getProductImagePath(product, 0),
            quantity: quantity,
            size: product.sizes ? size : null,
            dimension: product.sizes && product.sizes[size] ? product.sizes[size].dimension : product.dimension
        });
    }
    
    localStorage.setItem('rachayati_cart', JSON.stringify(state.cart));
    updateBadgeCounts();
    renderCartDrawer();
    showToast(`Added "${product.name}${sizeSuffix}" to cart!`);
}

function updateCartQuantity(productId, delta) {
    const item = state.cart.find(c => c.id === productId);
    if (!item) return;
    
    item.quantity += delta;
    if (item.quantity <= 0) {
        state.cart = state.cart.filter(c => c.id !== productId);
        showToast(`Removed "${item.name}" from cart`);
    } else {
        showToast(`Updated "${item.name}" quantity: ${item.quantity}`);
    }
    
    localStorage.setItem('rachayati_cart', JSON.stringify(state.cart));
    updateBadgeCounts();
    renderCartDrawer();
}

function removeFromCart(productId) {
    const item = state.cart.find(c => c.id === productId);
    const name = item ? item.name : 'Item';
    state.cart = state.cart.filter(c => c.id !== productId);
    localStorage.setItem('rachayati_cart', JSON.stringify(state.cart));
    updateBadgeCounts();
    renderCartDrawer();
    showToast(`Removed "${name}" from cart`);
}

function updateBadgeCounts() {
    const wCount = state.wishlist.length;
    const cCount = state.cart.reduce((acc, c) => acc + c.quantity, 0);
    
    if (elements.wishlistCount) elements.wishlistCount.textContent = wCount;
    if (elements.cartCount) elements.cartCount.textContent = cCount;
    if (elements.drawerWishlistCount) elements.drawerWishlistCount.textContent = wCount;
    if (elements.drawerCartCount) elements.drawerCartCount.textContent = cCount;
}

function renderWishlistDrawer() {
    if (!elements.wishlistItemsContainer) return;
    
    if (state.wishlist.length === 0) {
        elements.wishlistItemsContainer.innerHTML = `
            <div class="drawer-empty">
                <i class="fa-regular fa-heart"></i>
                <p>Your wishlist is empty.</p>
                <small>Explore our sacred creations to save your favorites.</small>
            </div>
        `;
        if (elements.wishlistFooter) elements.wishlistFooter.style.display = 'none';
        return;
    }
    
    if (elements.wishlistFooter) elements.wishlistFooter.style.display = 'block';
    
    elements.wishlistItemsContainer.innerHTML = state.wishlist.map(item => {
        const prod = PRODUCTS_DATA.find(p => p.id === item.id);
        const imgSrc = prod ? getProductImagePath(prod, 0) : item.image;
        
        return `
            <div class="drawer-item">
                <img src="${imgSrc}" alt="${item.name}" class="drawer-item-img" onerror="this.src='Logo.jpg'">
                <div class="drawer-item-details">
                    <div class="drawer-item-title">${item.name}</div>
                    <div class="drawer-item-pricing">
                        <span class="drawer-item-unit-price">₹${item.price}</span>
                        <small style="text-decoration: line-through; color: #999;">₹${item.mrp}</small>
                    </div>
                    <div class="drawer-item-actions-row">
                        <button class="btn btn-outline" style="font-size: 0.75rem; padding: 4px 10px;" onclick="addToCart(PRODUCTS_DATA.find(p => p.id === '${item.id}'))" title="Add to cart">
                            <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                        </button>
                        <button class="drawer-item-remove" onclick="toggleWishlist('${item.id}')" title="Remove">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

function renderCartDrawer() {
    if (!elements.cartItemsContainer) return;
    
    if (state.cart.length === 0) {
        elements.cartItemsContainer.innerHTML = `
            <div class="drawer-empty">
                <i class="fa-solid fa-bag-shopping"></i>
                <p>Your shopping cart is empty.</p>
                <small>Add spiritual creations to create a quick WhatsApp order list.</small>
                <div style="margin-top: 18px;">
                    <a href="shop.html" class="btn btn-dark" style="font-size: 0.82rem; padding: 8px 18px;" onclick="closeCartDrawer()">
                        Explore Spiritual Catalog →
                    </a>
                </div>
            </div>
        `;
        if (elements.cartFooter) elements.cartFooter.style.display = 'none';
        return;
    }
    
    if (elements.cartFooter) elements.cartFooter.style.display = 'flex';
    let total = 0;
    
    const cartItemsHtml = state.cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        const prod = PRODUCTS_DATA.find(p => p.id === item.originalProductId || p.id === item.id);
        const imgSrc = prod ? getProductImagePath(prod, 0) : (item.image || 'Logo.jpg');
        
        return `
            <div class="drawer-item">
                <img src="${imgSrc}" alt="${item.name}" class="drawer-item-img" onerror="this.src='Logo.jpg'">
                <div class="drawer-item-details">
                    <div class="drawer-item-title">${item.name}</div>
                    <div class="drawer-item-pricing">
                        <span class="drawer-item-unit-price">₹${item.price}</span>
                        <span class="drawer-item-subtotal">× ${item.quantity} = <strong>₹${itemTotal}</strong></span>
                    </div>
                    ${item.dimension ? `<small style="color: var(--text-muted); font-size: 0.72rem;">${item.dimension}</small>` : ''}
                    <div class="drawer-item-actions-row">
                        <div class="drawer-qty-stepper">
                            <button type="button" class="drawer-qty-btn minus" onclick="updateCartQuantity('${item.id}', -1)" title="Decrease"><i class="fa-solid fa-minus"></i></button>
                            <span class="drawer-qty-value">${item.quantity}</span>
                            <button type="button" class="drawer-qty-btn plus" onclick="updateCartQuantity('${item.id}', 1)" title="Increase"><i class="fa-solid fa-plus"></i></button>
                        </div>
                        <button type="button" class="drawer-item-remove" onclick="removeFromCart('${item.id}')" title="Remove item">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Quick Add-on Upsells
    const cartProductIds = state.cart.map(c => c.originalProductId || c.id);
    const upsellItems = PRODUCTS_DATA.filter(p => !cartProductIds.includes(p.id)).slice(0, 3);
    
    let upsellHtml = '';
    if (upsellItems.length > 0) {
        upsellHtml = `
            <div class="drawer-upsell-section">
                <div class="drawer-upsell-header">You May Also Like:</div>
                <div class="drawer-upsell-list">
                    ${upsellItems.map(uProd => `
                        <div class="drawer-upsell-item">
                            <img src="${getProductImagePath(uProd, 0)}" alt="${uProd.name}" class="drawer-upsell-img" onerror="this.src='Logo.jpg'">
                            <div class="drawer-upsell-info">
                                <span class="drawer-upsell-name">${uProd.name}</span>
                                <span class="drawer-upsell-price">₹${uProd.price}</span>
                            </div>
                            <button class="drawer-upsell-add-btn" onclick="addToCart(PRODUCTS_DATA.find(p => p.id === '${uProd.id}'), 1)" title="Add to cart">
                                <i class="fa-solid fa-plus"></i>
                            </button>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
    
    elements.cartItemsContainer.innerHTML = cartItemsHtml + upsellHtml;
    if (elements.drawerCartTotal) {
        elements.drawerCartTotal.textContent = `₹${total}`;
    }
}

function handleWhatsAppCheckout() {
    if (state.cart.length === 0) return;
    
    let total = 0;
    let message = `Namaste Rachayati Designs! 🙏\n\nI would like to place an order for the following spiritual creations:\n\n`;
    
    state.cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        message += `${index + 1}. *${item.name}*\n   • Quantity: ${item.quantity}\n   • Price: ₹${item.price} each (Total: ₹${itemTotal})\n`;
        if (item.dimension) {
            message += `   • Dimensions: ${item.dimension}\n`;
        }
        message += `\n`;
    });
    
    message += `──────────────────\n`;
    message += `*Total Order Value: ₹${total}*\n`;
    message += `──────────────────\n\n`;
    message += `Please confirm order availability, payment methods, and estimated dispatch time.\nThank you! Hare Krishna 🌸`;
    
    const waUrl = getWhatsAppUrl(message);
    window.open(waUrl, '_blank');
}

function showToast(message) {
    if (!elements.toastNotification || !elements.toastMessage) return;
    elements.toastMessage.textContent = message;
    elements.toastNotification.classList.add('show');
    
    setTimeout(() => {
        elements.toastNotification.classList.remove('show');
    }, 3000);
}

// Expose globals for inline events
window.openProductModal = openProductModal;
window.selectPageProductVariant = selectPageProductVariant;
window.selectPageSize = selectPageSize;
window.switchPageGalleryMedia = switchPageGalleryMedia;
window.toggleWishlist = toggleWishlist;
window.removeFromCart = removeFromCart;
window.updateCartQuantity = updateCartQuantity;
window.addToCart = addToCart;
window.closeCartDrawer = closeCartDrawer;

// ==========================================
// 10. EVENT LISTENERS
// ==========================================
function setupEventListeners() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            if (elements.header) elements.header.classList.add('scrolled');
        } else {
            if (elements.header) elements.header.classList.remove('scrolled');
        }
    });
    
    if (elements.shopCategoryFilters) {
        elements.shopCategoryFilters.addEventListener('click', (e) => {
            const btn = e.target.closest('.shop-pill-btn');
            if (!btn) return;
            state.currentCategory = btn.dataset.category;
            updateCategoryPillsUI();
            renderShopCatalog();
        });
    }
    
    if (elements.shopSortSelect) {
        elements.shopSortSelect.addEventListener('change', (e) => {
            state.sortBy = e.target.value;
            renderShopCatalog();
        });
    }
    
    if (elements.cartToggleBtn) elements.cartToggleBtn.addEventListener('click', openCartDrawer);
    if (elements.cartCloseBtn) elements.cartCloseBtn.addEventListener('click', closeCartDrawer);
    if (elements.wishlistToggleBtn) elements.wishlistToggleBtn.addEventListener('click', openWishlistDrawer);
    if (elements.wishlistCloseBtn) elements.wishlistCloseBtn.addEventListener('click', closeWishlistDrawer);
    
    if (elements.cartDrawer) {
        elements.cartDrawer.addEventListener('click', (e) => {
            if (e.target === elements.cartDrawer) closeCartDrawer();
        });
    }
    if (elements.wishlistDrawer) {
        elements.wishlistDrawer.addEventListener('click', (e) => {
            if (e.target === elements.wishlistDrawer) closeWishlistDrawer();
        });
    }
    
    if (elements.moveWishlistToCartBtn) {
        elements.moveWishlistToCartBtn.addEventListener('click', () => {
            state.wishlist.forEach(wItem => {
                const prod = PRODUCTS_DATA.find(p => p.id === wItem.id);
                if (prod) addToCart(prod, 1);
            });
            state.wishlist = [];
            localStorage.setItem('rachayati_wishlist', JSON.stringify([]));
            updateBadgeCounts();
            closeWishlistDrawer();
            openCartDrawer();
            showToast("All items moved to your cart!");
        });
    }

    if (elements.whatsappCheckoutBtn) {
        elements.whatsappCheckoutBtn.addEventListener('click', handleWhatsAppCheckout);
    }
    if (elements.clearCartBtn) {
        elements.clearCartBtn.addEventListener('click', () => {
            state.cart = [];
            localStorage.setItem('rachayati_cart', JSON.stringify([]));
            updateBadgeCounts();
            renderCartDrawer();
            showToast("Shopping cart cleared");
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCartDrawer();
            closeWishlistDrawer();
        }
    });
}

function openWishlistDrawer() {
    renderWishlistDrawer();
    if (elements.wishlistDrawer) elements.wishlistDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeWishlistDrawer() {
    if (elements.wishlistDrawer) elements.wishlistDrawer.classList.remove('open');
    document.body.style.overflow = '';
}

function openCartDrawer() {
    renderCartDrawer();
    if (elements.cartDrawer) elements.cartDrawer.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
    if (elements.cartDrawer) elements.cartDrawer.classList.remove('open');
    document.body.style.overflow = '';
}

// ==========================================
// 11. INITIALIZATION ON DOM READY
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    setupEventListeners();
    updateBadgeCounts();
    
    // Check if on dedicated product.html page
    if (document.getElementById('productDetailPage')) {
        initProductDetailPage();
    }
    
    // Check if on shop.html
    if (elements.shopProductsGrid) {
        const urlParams = new URLSearchParams(window.location.search);
        const catParam = urlParams.get('category');
        const searchParam = urlParams.get('search');
        
        if (catParam) state.currentCategory = catParam;
        if (searchParam) {
            state.searchQuery = searchParam;
            if (elements.globalSearchInput) elements.globalSearchInput.value = searchParam;
        }
        
        updateCategoryCounts();
        updateCategoryPillsUI();
        renderShopCatalog();
    }
    
    // Check if on index.html
    if (elements.featuredProductsGrid) {
        renderFeaturedCollection();
    }
});
