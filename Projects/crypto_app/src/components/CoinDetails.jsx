import {Badge,Box,Button,Container,HStack,Image,Progress,Radio,RadioGroup,Stat,StatArrow,StatHelpText,StatLabel,StatNumber,Text,VStack} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../index";
import Chart from "./Chart";
import ErrorComponent from "./ErrorComponent";
import Loader from "./Loader";

const CoinDetails = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";
  const btns = ["24h", "7d", "14d", "30d", "60d", "200d", "1y", "max"];

  const switchChartStats = (key) => {
    setDays(key);
    setLoading(true);
  };

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        setCoin(data);
        setChartArray(chartData.prices);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id, currency, days]);

  if (error) return <ErrorComponent message={"Error While Fetching Coin"} />;

  return (
    <Container maxW="container.xl" py={8}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box width="full" borderWidth={1} borderColor="gray.200" borderRadius="md" overflow="hidden" mb={8}>
            <Chart arr={chartArray} currency={currencySymbol} days={days} />
          </Box>

          <HStack p="4" overflowX="auto" mb={8} spacing={2}>
            {btns.map((i) => (
              <Button
                key={i}
                onClick={() => switchChartStats(i)}
                isDisabled={days === i}
                colorScheme={days === i ? "teal" : "gray"}
                variant={days === i ? "solid" : "outline"}
              >
                {i}
              </Button>
            ))}
          </HStack>

          <RadioGroup value={currency} onChange={setCurrency} p="4" mb={8}>
            <HStack spacing={4}>
              <Radio value="inr">INR</Radio>
              <Radio value="usd">USD</Radio>
              <Radio value="eur">EUR</Radio>
            </HStack>
          </RadioGroup>

          <VStack spacing={6} alignItems="flex-start">
            <Text fontSize="sm" color="gray.500">
              Last Updated: {new Date(coin.market_data.last_updated).toLocaleDateString()} 
              {new Date(coin.market_data.last_updated).toLocaleTimeString()}
            </Text>

            <Image src={coin.image.large} boxSize="80px" objectFit="contain" mb={4} />

            <Stat>
              <StatLabel fontSize="lg" fontWeight="medium" color="gray.700">
                {coin.name}
              </StatLabel>
              <StatNumber fontSize="2xl" fontWeight="bold" color="teal.500">
                {currencySymbol}
                {coin.market_data.current_price[currency].toLocaleString()}
              </StatNumber>
              <StatHelpText>
                <StatArrow type={coin.market_data.price_change_percentage_24h > 0 ? "increase" : "decrease"} />
                {coin.market_data.price_change_percentage_24h.toFixed(2)}%
              </StatHelpText>
            </Stat>

            <Badge fontSize="lg" bg="gray.800" color="white" px={4} py={2} borderRadius="md">
              #{coin.market_cap_rank}
            </Badge>

            <CustomBar
              high={`${currencySymbol}${coin.market_data.high_24h[currency].toLocaleString()}`}
              low={`${currencySymbol}${coin.market_data.low_24h[currency].toLocaleString()}`}
            />

            <Box w="full">
              <Item title="Max Supply" value={coin.market_data.max_supply ? coin.market_data.max_supply.toLocaleString() : 'N/A'} />
              <Item title="Circulating Supply" value={coin.market_data.circulating_supply.toLocaleString()} />
              <Item title="Market Cap" value={`${currencySymbol}${coin.market_data.market_cap[currency].toLocaleString()}`} />
              <Item title="All Time Low" value={`${currencySymbol}${coin.market_data.atl[currency].toLocaleString()}`} />
              <Item title="All Time High" value={`${currencySymbol}${coin.market_data.ath[currency].toLocaleString()}`} />
            </Box>
          </VStack>
        </>
      )}
    </Container>
  );
};

const Item = ({ title, value }) => (
  <HStack justifyContent="space-between" w="full" my="2">
    <Text fontWeight="medium" color="gray.600" fontSize="sm">{title}</Text>
    <Text fontWeight="bold" color="gray.800" fontSize="sm">{value}</Text>
  </HStack>
);

const CustomBar = ({ high, low }) => (
  <VStack w="full" spacing={2}>
    <Progress value={50} colorScheme="teal" size="lg" w="full" />
    <HStack justifyContent="space-between" w="full">
      <Badge colorScheme="red" fontSize="sm">{low}</Badge>
      <Text fontSize="sm" color="gray.600">24H Range</Text>
      <Badge colorScheme="green" fontSize="sm">{high}</Badge>
    </HStack>
  </VStack>
);

export default CoinDetails;
