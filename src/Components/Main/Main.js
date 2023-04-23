import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";

export default function Main(props) {
  const [productsList, setProductsList] = useState([]);
  const [wishlist, setWishlist]= useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setProductsList(json));
  }, []);

  const handleWishlistclick =(id)=>{
    console.log(id);
    let wish_list = [...wishlist]
    wish_list.push(id)
    setWishlist([... new Set(wish_list)])
  }
console.log(wishlist);
  return (
    <>
      <div style={{ padding: "20px", display: "flex", flexWrap: "wrap" }}>
        {productsList.map((product) => {
          return (
            <>
              <Grid item xs={12} lg={3} md={6} key={product.id}>
                <Card>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardMedia
                      image={product.image}
                      title="green iguana"
                      style={{ height: "100px", width: "100px" }}
                    />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                  <CardActions
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      alignItems: "center",
                    }}
                  >
                    <Button size="small" onClick={()=>handleWishlistclick(product.id)}>Wishlist</Button>
                    <Button size="small">Add to cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            </>
          );
        })}
      </div>
    </>
  );
}
