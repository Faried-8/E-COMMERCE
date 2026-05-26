# E-Commerce Angular App — Local Mock Version

This project has been fully converted to run **without any external API or backend server**.
All API calls are replaced with in-memory mock services using RxJS `of()` observables and localStorage persistence.

---

## 🚀 How to Run

### Easy Start Method (Windows)
1. **IMPORTANT**: If the `node_modules` folder does not exist, you must run this command in your terminal **only once** before using the script:
   `npm install --legacy-peer-deps`
2. Double-click the `run-project.bat` file in the project folder.
   - This will automatically start the Angular server in a new terminal and open the application (`http://localhost:4200`) in your default browser.

### Manual Start Method
```bash
# 1. Install dependencies (if node_modules does not exist)
npm install --legacy-peer-deps

# 2. Start the development server
ng serve

# 3. Open in browser
http://localhost:4200
```

---

## 🔑 Demo Login Credentials

```
Email:    user@example.com
Password: password123
```

You can also register a new account via the Sign Up page.

---

## ✅ What Was Fixed

### Critical Bugs Fixed
| Issue | Fix |
|-------|-----|
| `app.module.ts` had `FormGroup` and `NgModule` in `imports[]` array (runtime crash) | Removed invalid imports |
| `app.module.ts` had `AddaddressComponent` commented out in declarations but used in routing | Added component declaration |
| `cart.component.ts` had selector `app-product-details` (wrong selector) | Fixed to `app-cart` with full implementation |
| `address.component.ts` overwrote the injected `AddressService` with `this.address = res.data[0]` | Renamed variable to `this.addresses` |
| `add-address.component.ts` used `this.snackBar` but it was typed as `any` (not injected) | Properly injected `MatSnackBar` |
| `ProductDetailsComponent` was declared twice (in both product-details and cart files) | Cleaned up, only one declaration remains |

### APIs Mocked (all `http://techs-experts.net/public/api/...`)
| Endpoint | Mock Service |
|----------|-------------|
| `GET /top-categories` | `HomeService` → `MOCK_TOP_CATEGORIES` |
| `GET /categories/asc` | `CategoryService` → `MOCK_CATEGORIES` |
| `GET /single-product/:id` | `ProductService` → `getMockProduct(id)` |
| `GET /products-by-category/:catID/0/0` | `ProductByCategoryService` → `getMockProductsByCategory(id)` |
| `GET /client/usercart` | `CartService` → in-memory cart (persisted in localStorage) |
| `GET /client/cart` (add) | `CartService` → in-memory CRUD |
| `GET /client/cart/:id` (delete) | `CartService` → in-memory CRUD |
| `POST /client/customer_login` | `AuthService` → in-memory user store |
| `POST /client/customer_register` | `AuthService` → in-memory user store |
| `GET /client/profile` | `AuthService` / `AddressService` → `MOCK_PROFILE` |
| `GET /countries` | `AddressService` → `MOCK_COUNTRIES` |
| `GET /governorates/:id` | `AddressService` → `MOCK_GOVERNORATES` |
| `GET /cities/:id` | `AddressService` → `MOCK_CITIES` |
| `GET /client/customer_address_book` | `AddressService` → localStorage-persisted |
| `POST /client/customer_address_book` | `AddressService` → localStorage-persisted |
| `PUT /client/customer_address_book/:id` | `AddressService` → localStorage-persisted |
| `DELETE /client/customer_address_book/:id` | `AddressService` → localStorage-persisted |
| `GET https://jsonplaceholder.typicode.com/posts` | `GlobalService` → local mock posts |

### Data Persistence
- **Cart**: persisted to `localStorage` (key: `mock_cart`)
- **Addresses**: persisted to `localStorage` (key: `mock_addresses`)
- **Auth**: session stored in `localStorage` (`userToken`, `userName`)

---

## 📦 Project Structure (Key Files)

```
src/app/
├── services/
│   ├── mock-data/
│   │   └── mock-data.ts         ← All mock API data
│   ├── auth.service.ts          ← Mocked login/register/profile
│   ├── cart.service.ts          ← In-memory cart with localStorage
│   ├── address.service.ts       ← In-memory addresses with localStorage
│   ├── category.service.ts      ← Mock categories
│   ├── home.service.ts          ← Mock top categories
│   ├── product.service.ts       ← Mock product details
│   ├── product-by-category.service.ts ← Mock category products
│   ├── carousel.service.ts      ← Mock carousel
│   └── global.service.ts        ← Mock posts
├── pages/                       ← All original pages (UNCHANGED UI)
├── builtIn/                     ← Navbar, footer etc (UNCHANGED)
└── interceptors/                ← Auth token interceptors (unchanged)
```

---

## ⚠️ Known Limitations

- Product images use Unsplash URLs (requires internet). Offline: images won't load but app still functions.
- No real authentication — any user registered locally is stored in memory only (lost on page refresh, but login state is in localStorage).
- Cart data persists in localStorage across refreshes.

---

## 🛠 Tech Stack
- Angular 18
- Angular Material (MatSnackBar)
- @ng-select/ng-select
- Bootstrap 5
- RxJS (mock observables via `of()`)
- localStorage (CRUD persistence)
