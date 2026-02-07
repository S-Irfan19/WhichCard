
# WhichCard

**WhichCard** is a smart card‑recommendation tool that suggests the best credit or debit card for a given purchase based on rewards, cashback, categories, and your spending habits. 

Whether you have multiple cards with different reward programs or you want to optimize your spending, WhichCard helps you choose the card that gives you the highest benefit for each transaction.

---

## 📌 Key Features

- **Card‑Rewards Matching**  
  Analyzes your eligible cards and the purchase category (e.g., groceries, travel, dining) to recommend the best card. 

- **User‑Defined Spending Patterns**  
  Lets you register your cards and set up preferred categories, bonus rates, caps, and annual fees. 

- **Quick Search by Amount & Category**  
  Input the amount and category, and WhichCard instantly shows you the optimal card for that transaction. 

- **Reward‑Focused Optimization**  
  Prioritizes the highest reward points, miles, or cashback you can get for each purchase. 

---

## 🚀 Getting Started

### Prerequisites

- [Node.js / Python / Java / Android SDK] (adapt to your stack)  
- [Build tool, e.g., Gradle / Maven / npm]  
- [Development environment matching your tech stack]

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/S-Irfan19/WhichCard.git
   cd whichcard
   ```

2. Install dependencies:
   ```bash
   # For example, if using Node
   npm install

   # Or if using Android/Gradle
   ./gradlew build
   ```

3. Set up configuration (cards, rewards rules, categories, etc.) in the config file or database schema.

4. Run the app:
   ```bash
   # For Node
   npm start

   # For Android
   ./gradlew run
   ```

---

## 🛠 How It Works

1. **User Registers Cards**  
   The user inputs their credit/debit cards including:
   - Card name  
   - Category rewards (e.g., 5% on groceries, 2× on travel)  
   - Caps, fees, and other constraints 

2. **User Inputs Purchase Details**  
   For each transaction, the user provides:
   - Amount  
   - Category (optional tags or merchant type)  

3. **Matcher Engine**  
   The core logic evaluates:
   - Which card offers the highest reward rate for that category  
   - Whether caps or thresholds are hit  
   - Any extra constraints (e.g., annual fee, activation status) 

4. **Output**  
   The application returns:
   - Recommended card  
   - Estimated reward value or cashback  
   - Optional explanation (e.g., “This card gives 5% cashback on groceries”).

---

## 📂 Project Structure

Depending on your tech stack, the repository may look like:

```
whichcard/
├── src/
│   ├── main/          # Main application logic
│   │   └── java/      # or Python/Node modules
│   └── test/          # Unit and integration tests
├── config/            # Card rules, categories, reward definitions
├── assets/            # Icons, sample data, etc.
├── docs/              # Additional documentation
├── README.md
└── .env / config.yaml # Environment‑specific settings
```

Adjust paths and folders to match your actual code layout.

---

## 🧪 Running Tests

If the project includes tests:

```bash
# For Jest / Mocha / JUnit / pytest
npm test             # or
./gradlew test       # or
python -m pytest tests/
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature: short description"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

---

## 📎 Acknowledgements

WhichCard is inspired by the idea of optimizing credit‑card rewards and simplifying card selection for users with multiple cards.
```
