import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const mockData = [
    {
      id: 1,
      itemName: "Chanel",
      itemDesc: "Placeholder text. Item description goes here for new arrivals",
      image: "https://placeimg.com/360/360/any/grayscale"
    },
    {
      id: 2,
      itemName: "YSL",
      itemDesc: "Placeholder text. Item description goes here for new arrivals",
      image: "https://placeimg.com/360/360/any/grayscale"
    },
    {
      id: 3,
      itemName: "Armani",
      itemDesc: "Placeholder text. Item description goes here for new arrivals",
      image: "https://placeimg.com/360/360/any/grayscale"
    },
    {
      id: 4,
      itemName: "Hugo Boss",
      itemDesc: "Placeholder text. Item description goes here for new arrivals",
      image: "https://placeimg.com/360/360/any/grayscale"
    },
    {
      id: 5,
      itemName: "Gucci",
      itemDesc: "Placeholder text. Item description goes here for new arrivals",
      image: "https://placeimg.com/360/360/any/grayscale"
    },
    {
      id: 6,
      itemName: "Dior",
      itemDesc: "Placeholder text. Item description goes here for new arrivals",
      image: "https://placeimg.com/360/360/any/grayscale"
    }
  ];

  const mappedItems = mockData.map((item) => {
    return (
      <ProductListItem
        key={item.id}
        itemName={item.itemName}
        itemDesc={item.itemDesc}
        image={item.image}
      />
    )
  });

  return ( 
    <div className="new-arrival-products">
      {mappedItems}
    </div>
   );
}
 
export default ProductList;