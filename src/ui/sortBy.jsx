import { useSearchParams } from "react-router-dom";
import Select from "./ui/Select";

function SortBy({ options }) {
    const [searchParams, setSearchparams] = useSearchParams()
    const sortBy = searchParams.get("sortBy") || "";

    function handleChange(e) {
        searchParams.set("sortBy", e.target.value);
        setSearchparams(searchParams);
    }

    return (
        <Select 
            options={options}
            type="white"
            value={sortBy}
            onChange={handleChange}
        />
    )
}

export default SortBy;





