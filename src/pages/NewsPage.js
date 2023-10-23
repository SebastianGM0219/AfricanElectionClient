
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer/Footer";
import reactangle from "../assets/images/Rectangle 34.png";
import elipse from "../assets/images/Ellipse 5.png";
import news from "../assets/images/NEWS  TEXT.png";
import newsbox from "../assets/images/news-box.png";
import news1 from '../assets/images/lp.jpeg'
// Create a NewsCard component
const NewsCard = ({ data, onClick, isSelected }) => {
    return (
        <div
            className={`card ${isSelected ? "active" : ""}`}
            onClick={() => onClick(data)}
        >
            <img src={data.img}  />
            <h2>{data.title}</h2>
            <p>{data.des}</p>
        </div>
    );
};

const NewsPage = () => {
    const data = [
        {
            id: 1,
            img: require("../assets/images/news-box.png"),
            title: "Here will come the title1",
            des: "here will come the description of the news for this first 1"
        },
        {
            id: 2,
            img: require("../assets/images/news-box.png"),
            title: "Here will come the title",
            des: "here will come the description of the news for second 1"
        },
        {
            id: 3,
            img: require("../assets/images/news-box.png"),
            title: "Here will come the title",
            des: "here will come the description of the news for the third one"
        },
        {
            id: 4,
            img: require("../assets/images/news-box.png"),
            title: "Here will come the title",
            des: "here will come the description of the news for the fourth one"
        },
        {
            id: 5,
            img: require("../assets/images/news-box.png"),
            title: "Here will come the title",
            des: "here will come the description of the news or fifth"
        },
        {
            id: 6,
            img: require("../assets/images/news-box.png"),
            title: "Here will come the title",
            des: "here will come the description of the news for sixth"
        },
        {
            id: 7,
            img: require("../assets/images/news-box.png"),
            title: "Here will come the title",
            des: "here will come the description of the news for seventh"
        },

    ]

    const itemsPerPage = 6; // Number of items to show per page
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const [selectedNews, setSelectedNews] = useState(data[0]); // Initialize with the first item
    const [currentPage, setCurrentPage] = useState(1);

    // Function to handle news card click
    const handleNewsCardClick = (newsData) => {
        setSelectedNews(newsData);
    };

    // Function to calculate total pages
    const calculateTotalPages = () => {
        return Math.ceil(data.length / itemsPerPage);
    };

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        // Ensure the current page is within the valid range
        if (currentPage < 1) {
            setCurrentPage(1);
        } else if (currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the subset of data for the current page
    const currentData = data.slice(startIndex, endIndex);

    return (
        <>
            <div className="Home">
                <div class="container">
                    <img class="image" src={news1} alt="Responsive Image" />
                    <div class="overlay"></div>
                    <div className="text Big-heading">
                        <p>

                            <span className="THE">NEWS </span>

                        </p>
                    </div>
                </div>
                <div className="news news-detail">
                    
                    <div> <div class="container1">
                        <img class="left-image" src={elipse} alt="Left Image" />
                        <img class="center-image" src={reactangle} alt="Center Image" />
                        <img class="right-image" src={news} alt="Right Image" />
                        <div class="content">

                            <div className="cnter-c"> <div className="content-flex">
                                <h2>{selectedNews ? selectedNews.title : ""}</h2>
                                <p>{selectedNews ? selectedNews.des : ""}</p>

                            </div>
                                <div className="img">
                                    <img src={selectedNews ? selectedNews.img : ""}  />
                                </div></div>


                        </div>
                    </div></div>


                </div>
                <div className="news-items">
                    <div className="data-heading">
                        <span></span>
                        <h3>Recent News</h3>
                        <span></span>
                    </div>
                    <div className="card-container">
                        {currentData.map((item) => (
                            <NewsCard
                                key={item.id}
                                data={item}
                                onClick={handleNewsCardClick}
                                isSelected={selectedNews.id === item.id}
                            />
                        ))}
                    </div>
                    <div className="pagination">
                        <button
                            className="page-button"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <button
                                key={index}
                                className={`page-button ${currentPage === index + 1 ? "active" : ""
                                    }`}
                                onClick={() => handlePageChange(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))}
                        <button
                            className="page-button"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default NewsPage;
