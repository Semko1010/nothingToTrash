import { useEffect, useState } from "react";
import axios from "axios";

const useDataFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get(
                    "/api/products/allProducts"
                );
                setData(response);
            } catch (error) {
                console.error(error);
            }
            setLoading(false);
        };

        fetchData();
    }, [loading]);

    return {
        data,
        loading,
    };
};

export default useDataFetch;
