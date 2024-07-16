import { useQuery } from '@tanstack/react-query';
import { getBookings } from '../../services/apiBookings';

export function useBookings({filter, sortBy}) {
  const [searchParams] = useSearchParams();

  // FILTER 
  const filterValue = searchParams.get('status')
  const filter = !filterValue || filterValue === "all" ? null : {field: "status", value: filterValue}

  // SORT 
  const sortByRaw = searchParams.get('sortBy') || "startDate-desc";
  const [field, direction] = sortByRaw.split("-");
  const sortBy = {field, direction};

  // PAGINATION
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))


  // QUERY 
  const {
    isLoading,
    data: {data: bookings, count} = {},
    error,
  } = useQuery({
    queryKey: ['bookings', filter. sortBy],
    queryFn: () => getBookings({filter, sortBy, page}),
  });

  return { isLoading, error, bookings };
}
