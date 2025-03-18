function Result({ data }: { data: any }) {
  return (
    <div>
      {data && data.current ? (
        <p>
          Temperature: {data.current.temp_c}°C // Region: {data.location.region}
        </p>
      ) : (
        <p>City not found</p>
      )}
    </div>
  );
}

export default Result;
