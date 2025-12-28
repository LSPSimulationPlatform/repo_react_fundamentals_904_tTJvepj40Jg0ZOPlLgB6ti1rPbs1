import React, { useState } from "react";

function ProductCreate({ onAddProduct }) {

    const [productName, setProductName] = useState("");
    const [productCode, setProductCode] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [productCategory, setProductCategory] = useState("Electronics");
    const [productDescription, setProductDescription] = useState("");

    const saveProduct = () => {

        if (!productName) {
            alert("Product name is required.");
            return;
        }

        if (!productCode) {
            alert("Product code is required.");
            return;
        }

        const newProduct = {
            productName,
            productCode,
            releaseDate,
            productCategory,
            productDescription,
        };

        onAddProduct(newProduct);

        alert("Product added successfully!");

        setProductName("");
        setProductCode("");
        setReleaseDate("");
        setProductCategory("Electronics");
        setProductDescription("");
    };

    const backButtonStyle = {
        marginTop: 15,
        marginLeft: 15,
        backgroundColor: "gray",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: 5,
        cursor: "pointer",
        fontSize: 16,
    };

    return (
        <div
            style={{
                backgroundColor: "#f4f4f4", // Light gray background for the form container
                width: 600, // Fixed width
                borderRadius: 5, // Rounded corners
                padding: "20px 40px 20px 20px", // Inner spacing
                margin: "10px auto", // Center horizontally with margin top/bottom
                fontFamily: "Arial, sans-serif", // Font styling
            }}
        >
            {/* Title of the page */}
            <h1 style={{ color: "blue" }}>Product Create Page</h1>

            {/* Label for product name input */}
            <label>Product Name</label>
            <br />
            {/* Input field bound to productName state */}
            <input
                type="text"
                value={productName} // Controlled input value
                onChange={(e) => setProductName(e.target.value)} // Update state on user input
                placeholder="Product Name"
                style={{ width: "100%", padding: 8, marginBottom: 15 }} // Styling
            />
            <br />

            {/* Label for product code input */}
            <label>Product Code</label>
            <br />
            {/* Input field bound to productCode state */}
            <input
                type="text"
                value={productCode} // Controlled input value
                onChange={(e) => setProductCode(e.target.value)} // Update state on user input
                placeholder="Product Code"
                style={{ width: "100%", padding: 8, marginBottom: 15 }} // Styling
            />
            <br />

            {/* Label for release date input */}
            <label>Release Date</label>
            <br />
            {/* Date input bound to releaseDate state */}
            <input
                type="date"
                value={releaseDate} // Controlled input value
                onChange={(e) => setReleaseDate(e.target.value)} // Update state on user input
                style={{ width: "100%", padding: 8, marginBottom: 15 }} // Styling
            />
            <br />

            {/* Label for category selection */}
            <label>Product Category</label>
            <br />
            {/* Select dropdown bound to productCategory state */}
            <select
                value={productCategory} // Controlled select value
                onChange={(e) => setProductCategory(e.target.value)} // Update state on change
                style={{ width: "100%", padding: 8, marginBottom: 15 }} // Styling
            >
                {/* Options for category */}
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Books</option>
                <option>Home & Kitchen</option>
                <option>Toys & Games</option>
                <option>Health & Beauty</option>
            </select>
            <br />

            {/* Label for product description */}
            <label>Product Description</label>
            <br />
            {/* Textarea bound to productDescription state */}
            <textarea
                value={productDescription} // Controlled textarea value
                onChange={(e) => setProductDescription(e.target.value)} // Update state on user input
                placeholder="Product Description"
                rows={4} // Number of visible text lines
                style={{ width: "100%", padding: 8, marginBottom: 20 }} // Styling
            ></textarea>
            <br />

            {/* Save button triggers saveProduct function */}
            <button
                onClick={saveProduct} // On click event handler
                style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    borderRadius: 5,
                    cursor: "pointer",
                    fontSize: 16,
                }}
            >
                Save
            </button>

            <button style={backButtonStyle}>
                Back to Main Page
            </button>
        </div>
    );
}

export default ProductCreate;