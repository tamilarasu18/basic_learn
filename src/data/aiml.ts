import { Section } from "./types";

export const aimlSections: Section[] = [
  {
    id: 1,
    title: "Python & Data Foundations",
    icon: "🐍",
    topics: [
      {
        id: "python-basics",
        title: "Python for ML",
        difficulty: "easy",
        shortDesc: "Essential Python for data science",
        theory:
          "<h3>Python for ML</h3><p>Python is the dominant language for AI/ML. Key features: easy syntax, powerful libraries (NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch).</p><h3>Key Concepts</h3><ul><li>List comprehensions</li><li>Lambda functions</li><li>Generators</li><li>Decorators</li></ul>",
        codeExample: `// Python concepts shown in JS\n// List comprehension: [x**2 for x in range(10) if x % 2 == 0]\nconst squares = Array.from({length: 10}, (_, i) => i).filter(x => x % 2 === 0).map(x => x ** 2);\nconsole.log("Squares of evens:", squares.join(", "));\n\n// Lambda: lambda x: x * 2\nconst double = x => x * 2;\nconsole.log("Lambda(5):", double(5));\n\n// Dictionary (Object)\nconst model_scores = { "linear": 0.85, "tree": 0.92, "svm": 0.89 };\nconst best = Object.entries(model_scores).sort((a,b) => b[1]-a[1])[0];\nconsole.log("Best model:", best[0], "score:", best[1]);\n\n// NumPy-like operations\nconst arr = [1, 2, 3, 4, 5];\nconst mean = arr.reduce((s,v) => s+v, 0) / arr.length;\nconst std = Math.sqrt(arr.reduce((s,v) => s + (v-mean)**2, 0) / arr.length);\nconsole.log("Mean:", mean, "Std:", std.toFixed(2));`,
        quiz: [
          {
            question: "Most popular language for ML?",
            options: ["Java", "C++", "Python", "R"],
            answer: 2,
          },
        ],
      },
      {
        id: "numpy-basics",
        title: "NumPy Essentials",
        difficulty: "easy",
        shortDesc: "Numerical computing with arrays",
        theory:
          "<h3>NumPy</h3><p>NumPy provides fast n-dimensional arrays and mathematical operations. Foundation for all ML libraries.</p><h3>Key Operations</h3><ul><li>Array creation, reshaping, indexing</li><li>Element-wise operations, broadcasting</li><li>Linear algebra (dot product, matrix multiply)</li><li>Statistical functions (mean, std, min, max)</li></ul>",
        codeExample: `// NumPy concepts in JS\nclass NDArray {\n  constructor(data) { this.data = data; this.shape = [data.length]; }\n  add(other) { return new NDArray(this.data.map((v,i) => v + other.data[i])); }\n  multiply(scalar) { return new NDArray(this.data.map(v => v * scalar)); }\n  dot(other) { return this.data.reduce((s,v,i) => s + v * other.data[i], 0); }\n  mean() { return this.data.reduce((s,v) => s+v, 0) / this.data.length; }\n  toString() { return "[" + this.data.join(", ") + "]"; }\n}\n\nconst a = new NDArray([1, 2, 3, 4, 5]);\nconst b = new NDArray([5, 4, 3, 2, 1]);\n\nconsole.log("a:", a.toString());\nconsole.log("b:", b.toString());\nconsole.log("a + b:", a.add(b).toString());\nconsole.log("a * 3:", a.multiply(3).toString());\nconsole.log("dot(a,b):", a.dot(b));\nconsole.log("mean(a):", a.mean());`,
        quiz: [
          {
            question: "NumPy arrays are faster than Python lists because?",
            options: [
              "They use less memory",
              "Contiguous memory + C implementation",
              "They are cached",
              "They use GPU",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "pandas-basics",
        title: "Pandas for Data",
        difficulty: "medium",
        shortDesc: "Data manipulation with DataFrames",
        theory:
          "<h3>Pandas</h3><p>Pandas provides DataFrames — labeled 2D data structures perfect for tabular data. Think of it as Excel in Python.</p><h3>Key Operations</h3><ul><li>Read CSV/JSON/SQL</li><li>Select, filter, group, aggregate</li><li>Handle missing values</li><li>Merge and join datasets</li></ul>",
        codeExample: `// DataFrame concept in JS\nclass DataFrame {\n  constructor(data) { this.data = data; this.columns = Object.keys(data[0]); }\n  head(n=3) { return this.data.slice(0, n); }\n  describe() {\n    const numCols = this.columns.filter(c => typeof this.data[0][c] === 'number');\n    numCols.forEach(col => {\n      const vals = this.data.map(r => r[col]);\n      console.log(col + ": mean=" + (vals.reduce((s,v)=>s+v,0)/vals.length).toFixed(1) + ", min=" + Math.min(...vals) + ", max=" + Math.max(...vals));\n    });\n  }\n  filter(fn) { return new DataFrame(this.data.filter(fn)); }\n  groupBy(col) {\n    const groups = {};\n    this.data.forEach(r => { (groups[r[col]] = groups[r[col]] || []).push(r); });\n    return groups;\n  }\n}\n\nconst df = new DataFrame([\n  {name:'Alice', age:25, salary:50000, dept:'Engineering'},\n  {name:'Bob', age:30, salary:60000, dept:'Marketing'},\n  {name:'Carol', age:28, salary:55000, dept:'Engineering'},\n  {name:'Dave', age:35, salary:70000, dept:'Marketing'},\n]);\n\nconsole.log("Head:", JSON.stringify(df.head(2)));\ndf.describe();\nconsole.log("Engineering:", JSON.stringify(df.filter(r => r.dept==='Engineering').data));`,
        quiz: [
          {
            question: "Pandas primary data structure is?",
            options: ["Array", "Matrix", "DataFrame", "Table"],
            answer: 2,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Machine Learning",
    icon: "🧠",
    topics: [
      {
        id: "supervised-learning",
        title: "Supervised Learning",
        difficulty: "medium",
        shortDesc: "Classification and regression with labeled data",
        theory:
          "<h3>Supervised Learning</h3><p>Learn from labeled examples. Two types:</p><ul><li><strong>Classification</strong> — predict categories (spam/not spam)</li><li><strong>Regression</strong> — predict continuous values (price, temperature)</li></ul><h3>Common Algorithms</h3><ul><li>Linear/Logistic Regression</li><li>Decision Trees, Random Forest</li><li>SVM, KNN</li></ul>",
        codeExample: `// Linear Regression from scratch\nfunction linearRegression(X, y) {\n  const n = X.length;\n  const xMean = X.reduce((s,v) => s+v, 0) / n;\n  const yMean = y.reduce((s,v) => s+v, 0) / n;\n  \n  let num = 0, den = 0;\n  for (let i = 0; i < n; i++) {\n    num += (X[i] - xMean) * (y[i] - yMean);\n    den += (X[i] - xMean) ** 2;\n  }\n  \n  const slope = num / den;\n  const intercept = yMean - slope * xMean;\n  \n  return { slope, intercept, predict: (x) => slope * x + intercept };\n}\n\n// House size → price\nconst sizes = [1000, 1500, 2000, 2500, 3000];\nconst prices = [200, 300, 400, 500, 600];\n\nconst model = linearRegression(sizes, prices);\nconsole.log("Model: price =", model.slope.toFixed(4), "* size +", model.intercept.toFixed(1));\nconsole.log("Predict 1800 sqft:", model.predict(1800).toFixed(0) + "k");\nconsole.log("Predict 3500 sqft:", model.predict(3500).toFixed(0) + "k");`,
        quiz: [
          {
            question: "Predicting house prices is which type?",
            options: [
              "Classification",
              "Regression",
              "Clustering",
              "Reinforcement",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "unsupervised-learning",
        title: "Unsupervised Learning",
        difficulty: "medium",
        shortDesc: "Clustering and dimensionality reduction",
        theory:
          "<h3>Unsupervised Learning</h3><p>Find patterns in unlabeled data.</p><ul><li><strong>Clustering</strong> — group similar items (K-Means, DBSCAN)</li><li><strong>Dimensionality Reduction</strong> — reduce features (PCA, t-SNE)</li></ul>",
        codeExample: `// K-Means clustering (simplified)\nfunction kMeans(points, k, iterations = 10) {\n  // Initialize centroids randomly\n  let centroids = points.slice(0, k).map(p => ({...p}));\n  \n  for (let iter = 0; iter < iterations; iter++) {\n    // Assign points to nearest centroid\n    const clusters = Array.from({length: k}, () => []);\n    points.forEach(p => {\n      let minDist = Infinity, minK = 0;\n      centroids.forEach((c, i) => {\n        const dist = Math.sqrt((p.x-c.x)**2 + (p.y-c.y)**2);\n        if (dist < minDist) { minDist = dist; minK = i; }\n      });\n      clusters[minK].push(p);\n    });\n    \n    // Update centroids\n    centroids = clusters.map(cl => ({\n      x: cl.reduce((s,p) => s+p.x, 0) / cl.length,\n      y: cl.reduce((s,p) => s+p.y, 0) / cl.length\n    }));\n  }\n  return centroids;\n}\n\nconst data = [{x:1,y:2},{x:1.5,y:1.8},{x:5,y:8},{x:6,y:9},{x:1,y:0.6},{x:9,y:11}];\nconst centers = kMeans(data, 2);\nconsole.log("Cluster centers:");\ncenters.forEach((c,i) => console.log("  Cluster " + i + ": (" + c.x.toFixed(1) + ", " + c.y.toFixed(1) + ")"));`,
        quiz: [
          {
            question: "K-Means is which type of learning?",
            options: [
              "Supervised",
              "Unsupervised",
              "Reinforcement",
              "Semi-supervised",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "neural-networks",
        title: "Neural Networks Intro",
        difficulty: "hard",
        shortDesc: "Build your first neural network",
        theory:
          "<h3>Neural Networks</h3><p>Inspired by the brain. Layers of interconnected neurons that learn patterns.</p><ul><li><strong>Input Layer</strong> — receives features</li><li><strong>Hidden Layers</strong> — learn representations</li><li><strong>Output Layer</strong> — produces predictions</li><li><strong>Activation Functions</strong> — ReLU, Sigmoid, Softmax</li></ul>",
        codeExample: `// Simple neural network neuron\nfunction sigmoid(x) { return 1 / (1 + Math.exp(-x)); }\nfunction relu(x) { return Math.max(0, x); }\n\nclass Neuron {\n  constructor(numInputs) {\n    this.weights = Array.from({length: numInputs}, () => Math.random() * 2 - 1);\n    this.bias = Math.random() * 2 - 1;\n  }\n  forward(inputs) {\n    let sum = this.bias;\n    for (let i = 0; i < inputs.length; i++) sum += inputs[i] * this.weights[i];\n    return sigmoid(sum);\n  }\n}\n\n// Simple 2-input neuron (AND gate approximation)\nconst neuron = new Neuron(2);\nneuron.weights = [0.5, 0.5];\nneuron.bias = -0.7;\n\nconsole.log("AND gate approximation:");\nconsole.log("0,0 →", neuron.forward([0,0]).toFixed(3));\nconsole.log("0,1 →", neuron.forward([0,1]).toFixed(3));\nconsole.log("1,0 →", neuron.forward([1,0]).toFixed(3));\nconsole.log("1,1 →", neuron.forward([1,1]).toFixed(3));\n\nconsole.log("\\nActivation functions:");\nconsole.log("sigmoid(0):", sigmoid(0).toFixed(3));\nconsole.log("sigmoid(5):", sigmoid(5).toFixed(3));\nconsole.log("relu(-3):", relu(-3), "relu(3):", relu(3));`,
        quiz: [
          {
            question: "Most popular activation for hidden layers?",
            options: ["Sigmoid", "Tanh", "ReLU", "Linear"],
            answer: 2,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Interview Prep",
    icon: "🎯",
    topics: [
      {
        id: "ml-bias-variance",
        title: "Bias-Variance Tradeoff",
        difficulty: "hard",
        shortDesc:
          "Understanding overfitting, underfitting, and model selection",
        theory: `<h3>Bias vs Variance</h3><ul><li><strong>High Bias</strong> — model is too simple (underfitting). Misses patterns.</li><li><strong>High Variance</strong> — model is too complex (overfitting). Memorizes noise.</li><li><strong>Goal</strong> — balance both for generalization</li></ul><h3>Fixes</h3><ul><li>Underfitting → more features, complex model, less regularization</li><li>Overfitting → more data, regularization (L1/L2), dropout, cross-validation</li></ul>`,
        codeExample: `// Bias-Variance example
function generateData(n) {
  return Array.from({length: n}, (_, i) => ({
    x: i, y: 2 * i + 3 + (Math.random() - 0.5) * 4
  }));
}

const data = generateData(10);

// Underfitting: constant prediction (high bias)
function underfitModel(data) {
  const avg = data.reduce((s, p) => s + p.y, 0) / data.length;
  const error = data.reduce((s, p) => s + (p.y - avg) ** 2, 0) / data.length;
  console.log("Underfit (constant): predict always " + avg.toFixed(1));
  console.log("  MSE:", error.toFixed(2), "(high bias!)");
}

// Good fit: linear regression
function goodFitModel(data) {
  const n = data.length;
  const mx = data.reduce((s,p) => s+p.x, 0) / n;
  const my = data.reduce((s,p) => s+p.y, 0) / n;
  let num = 0, den = 0;
  data.forEach(p => { num += (p.x-mx)*(p.y-my); den += (p.x-mx)**2; });
  const slope = num/den, intercept = my - slope*mx;
  const error = data.reduce((s,p) => s + (p.y - (slope*p.x + intercept))**2, 0) / n;
  console.log("\\nGood fit (linear): y = " + slope.toFixed(2) + "x + " + intercept.toFixed(2));
  console.log("  MSE:", error.toFixed(2), "(balanced!)");
}

// Overfitting: memorize each point
function overfitModel(data) {
  console.log("\\nOverfit (memorize): stores all " + data.length + " points");
  console.log("  Training MSE: 0.00 (perfect on training!)");
  console.log("  Test MSE: HIGH (fails on new data!)");
}

underfitModel(data);
goodFitModel(data);
overfitModel(data);`,
        quiz: [
          {
            question: "Overfitting means?",
            options: [
              "Model is too simple",
              "Model memorizes training noise",
              "Model is perfect",
              "Model needs more features",
            ],
            answer: 1,
          },
          {
            question: "Regularization helps with?",
            options: [
              "Underfitting",
              "Overfitting",
              "Data collection",
              "Feature engineering",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "ml-evaluation",
        title: "Model Evaluation Metrics",
        difficulty: "medium",
        shortDesc: "Accuracy, precision, recall, F1, AUC-ROC",
        theory: `<h3>Classification Metrics</h3><ul><li><strong>Accuracy</strong> — correct / total (misleading with imbalanced data!)</li><li><strong>Precision</strong> — true positives / predicted positives (spam filter quality)</li><li><strong>Recall</strong> — true positives / actual positives (disease detection)</li><li><strong>F1 Score</strong> — harmonic mean of precision & recall</li><li><strong>AUC-ROC</strong> — area under the ROC curve (overall discriminative ability)</li></ul><div class="info-box"><div class="info-box-title">💡 Interview Key</div>When asked "which metric?", the answer depends on the cost of false positives vs false negatives. Medical: prioritize recall. Spam: prioritize precision.</div>`,
        codeExample: `// Classification metrics from confusion matrix
function evaluateModel(predictions, actual) {
  let tp = 0, fp = 0, fn = 0, tn = 0;
  for (let i = 0; i < predictions.length; i++) {
    if (predictions[i] === 1 && actual[i] === 1) tp++;
    else if (predictions[i] === 1 && actual[i] === 0) fp++;
    else if (predictions[i] === 0 && actual[i] === 1) fn++;
    else tn++;
  }

  const accuracy = (tp + tn) / (tp + tn + fp + fn);
  const precision = tp / (tp + fp) || 0;
  const recall = tp / (tp + fn) || 0;
  const f1 = 2 * (precision * recall) / (precision + recall) || 0;

  console.log("Confusion Matrix:");
  console.log("  TP:", tp, " FP:", fp);
  console.log("  FN:", fn, " TN:", tn);
  console.log("\\nMetrics:");
  console.log("  Accuracy:", (accuracy * 100).toFixed(1) + "%");
  console.log("  Precision:", (precision * 100).toFixed(1) + "%");
  console.log("  Recall:", (recall * 100).toFixed(1) + "%");
  console.log("  F1 Score:", (f1 * 100).toFixed(1) + "%");
}

// Cancer detection scenario
const predictions = [1, 1, 0, 0, 1, 0, 1, 0, 0, 1];
const actual =      [1, 0, 0, 1, 1, 0, 1, 0, 1, 1];

console.log("=== Cancer Detection Model ===\\n");
evaluateModel(predictions, actual);
console.log("\\n→ In medical: recall matters most (catch all cases)");`,
        quiz: [
          {
            question: "For disease detection, prioritize?",
            options: ["Accuracy", "Precision", "Recall", "Speed"],
            answer: 2,
          },
          {
            question: "F1 Score is the harmonic mean of?",
            options: [
              "Accuracy and recall",
              "Precision and recall",
              "Accuracy and F1",
              "TP and TN",
            ],
            answer: 1,
          },
        ],
      },
      {
        id: "ml-top-questions",
        title: "Top ML Interview Questions",
        difficulty: "medium",
        shortDesc: "Most asked ML questions with concise answers",
        theory: `<h3>Frequently Asked</h3><ol><li>Supervised vs Unsupervised vs Reinforcement?</li><li>How does gradient descent work?</li><li>What is cross-validation?</li><li>L1 vs L2 regularization?</li><li>Decision Tree vs Random Forest?</li><li>How to handle missing data?</li><li>Feature scaling — when and why?</li><li>Curse of dimensionality?</li></ol>`,
        codeExample: `// Quick ML interview answers
const qa = [
  {
    q: "Supervised vs Unsupervised?",
    a: "Supervised: labeled data (classification/regression). Unsupervised: no labels (clustering/PCA)."
  },
  {
    q: "Gradient descent?",
    a: "Iteratively adjust weights to minimize loss. Learning rate controls step size."
  },
  {
    q: "Cross-validation?",
    a: "Split data into k folds, train on k-1, test on 1. Repeat k times. Prevents overfitting to test set."
  },
  {
    q: "L1 vs L2 regularization?",
    a: "L1 (Lasso): can zero out features (feature selection). L2 (Ridge): shrinks all weights evenly."
  },
  {
    q: "Random Forest vs Decision Tree?",
    a: "RF: ensemble of trees, reduces overfitting via bagging. Better generalization, harder to interpret."
  },
  {
    q: "Handle missing data?",
    a: "Remove rows, impute (mean/median/mode), use models that handle nulls (XGBoost), or flag missing as a feature."
  }
];

console.log("=== ML Interview Quick-Fire ===\\n");
qa.forEach((item, i) => {
  console.log((i+1) + ". " + item.q);
  console.log("   → " + item.a + "\\n");
});`,
        quiz: [
          {
            question: "L1 regularization can?",
            options: [
              "Increase weights",
              "Zero out features",
              "Add more features",
              "Speed up training",
            ],
            answer: 1,
          },
          {
            question: "Random Forest reduces overfitting via?",
            options: [
              "Pruning",
              "Bagging (bootstrap aggregation)",
              "Dropout",
              "Early stopping",
            ],
            answer: 1,
          },
        ],
      },
    ],
  },
];
