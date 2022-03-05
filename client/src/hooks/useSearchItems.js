import { useEffect, useState } from "react";

const useSearchItems = (data) => {
    const [filteredResults, setFilteredResults] = useState(data);
    useEffect(() => {
        setFilteredResults(data);
    }, [data]);
    const searchItems = (searchValue) => {
        if (searchValue.length >= 0) {
            const filteredData = data.filter((item) => {
                return Object.values(item)
                    .join("")
                    .toLowerCase()
                    .includes(searchValue.toLowerCase());
            });
            setFilteredResults(filteredData);
        } else {
            setFilteredResults(data);
        }
    };
    return { searchItems, filteredResults };
};

export default useSearchItems;
