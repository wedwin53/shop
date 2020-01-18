const getRest = () =>{
  const fParams = {
    method: 'POST',
    mode: "cors",
    headers: {
      "Accept-Encoding": "identity",
      "Content-Length": "*",
      "Content-Type": "application/json",
      "Host": "httpbin.org",
      "User-Agent": "Python-urllib/3.3"
      }
    };

  const url = 'https://www.getchopstix.com/api/restaurant-search/'
  return fetch(url, fParams)
    .then(response => response.json())
    .then(data => data.search_result)
    .then(results => results.map(search_result => ({
      restaurantID: search_result.restaurant_id,
      restaurantName: search_result.restaurant_name,
      address_street: search_result.address.full_street,
      address_city: search_result.address.full_city,
      restaurantDistance: search_result.restaurantDistance,
      restaurantsDeliveryTime: search_result.restaurantsDeliveryTime,
      imageUrl: search_result.imageUrl
    })))
}

const getMenu = (resID) =>{
  
  let rID = resID
  const bdata = {"restaurant_id": `${rID}`,"is_delivery":false}
  const fParamsMenu = {
    method: 'POST',
    mode: "cors",
    headers: {
      "Accept-Encoding": "identity",
      "Content-Length": "*",
      "Content-Type": "application/json",
      "Host": "httpbin.org",
      "User-Agent": "Python-urllib/3.3"
      },
    body: JSON.stringify(bdata)
    };

  const url = 'https://www.getchopstix.com/restaurant/get-menu/'
  return fetch(url, fParamsMenu)
    .then(response => response.json())
    .then(data => data.menu)
    .then(results => results.map(menu => ({
      itemMenuId: menu.id,
      itemMenuName: menu.name,
      itemMenuPrice: menu.base_price,
      //itemMenuDeliveryMethod: menu.is_pick_up_only,
      //itemMenuVaritTypesID: menu.variant_types.id,
      //itemMenuVaritTypesName: menu.variant_types.name,
      //itemMenuVaritTypesCateg: menu.variant_types.category,
      //itemMenuVaritTypesReq: manu.variant_types.required
    })))
}


export { getRest, getMenu }