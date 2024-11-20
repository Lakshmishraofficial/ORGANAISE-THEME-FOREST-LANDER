"use client";
import FeaturedProducts from "./FeaturedProducts";
import Reviews from "./Reviews";
import ReviewForm from "./ReviewForm";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useContextElement } from "@/context/Context";
import { Gallery, Item } from "react-photoswipe-gallery";

const images = [
  {
    alt: "Disney Toys",
    src: "/assets/images/common/products/img-08.jpg",
    width: 1280,
    height: 1707,
    caption: "Disney Toys",
  },
  {
    alt: "Disney Toys",
    src: "/assets/images/common/products/img-17.jpg",
    width: 1280,
    height: 1924,
    caption: "Disney Toys",
  },
  {
    alt: "Disney Toys",
    src: "/assets/images/common/products/img-18.jpg",
    width: 1280,
    height: 1924,
    caption: "Disney Toys",
  },
  {
    alt: "Disney Toys",
    src: "/assets/images/common/products/img-19.jpg",
    width: 1280,
    height: 1924,
    caption: "Disney Toys",
  },
];
export default function ShopDetails2({ product }) {
  const [activeTab, setActiveTab] = useState("description");
  const { isAddedToCartProducts, addProductToCart } = useContextElement();

  return (
    <article className="product type-product single product-single py-2 lg:py-6 xl:py-8">
      <div className="container max-w-xl">
        <header className="product-header panel">
          <div className="row w-100 child-cols-12 lg:child-cols-6 gy-4 gx-4 md:gx-6 xl:gx-8">
            <div>
              <div
                className="product-gallery panel vstack gap-2"
                data-uc-lightbox=""
              >
                <Gallery>
                  {images.map((image, index) => (
                    <Item
                      original={image.src}
                      thumbnail={image.src}
                      width={image.width}
                      height={image.height}
                      key={index}
                    >
                      {({ ref, open }) => (
                        <figure
                          key={index}
                          className="featured-image m-0 rounded ratio ratio-1x1 uc-transition-toggle overflow-hidden"
                        >
                          <Image
                            className="media-cover image uc-transition-scale-up uc-transition-opaque"
                            alt={image.alt}
                            ref={ref}
                            src={image.src}
                            width={image.width}
                            height={image.height}
                          />
                          <a
                            onClick={open}
                            className="position-cover"
                            data-caption={image.caption}
                          ></a>
                        </figure>
                      )}
                    </Item>
                  ))}{" "}
                </Gallery>
              </div>
            </div>
            <div>
              <div
                className="product-details sticky-element panel vstack justify-center items-center gap-1 xl:gap-2 max-w-500px mx-auto text-center"
                data-uc-sticky="bottom: true; offset: 48;"
              >
                <h1 className="product-title h3 xl:h1 m-0">{product.name}</h1>
                <div className="vstack justify-center items-center gap-2">
                  <div className="product-price hstack justify-center items-center gap-1 fs-5 xl:fs-4">
                    <span className="price-old text-line-through opacity-40">
                      $
                      {product.oldPrice
                        ? product.oldPrice.toFixed(2)
                        : (product.price + 20).toFixed(2)}
                    </span>
                    <span className="price">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="product-rating hstack justify-center items-center gap-1">
                    <span className="hstack gap-narrow fs-7 opacity-60">
                      {product.rating}
                      <span className="d-none sm:d-inline-block">reviews</span>
                    </span>
                    <ul
                      className="nav-x gap-0 text-gray-100 dark:text-gray-700"
                      title="Average 4 out of 5"
                    >
                      {[...Array(product.rating)].map((elm, i) => (
                        <li key={i}>
                          <i className="icon fs-6 lg:fs-5 unicon-star-filled text-yellow" />
                        </li>
                      ))}
                      {[...Array(5 - product.rating)].map((elm, i) => (
                        <li key={i}>
                          <i className="icon fs-6 lg:fs-5 unicon-star-filled" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="product-desc fs-6 xl:fs-5 my-2">
                  Consetetur sadipscing elitr, syosma vero eos et accusam et
                  justo takimata sit amet sed diam nonumy eirmod tempor invidunt
                  ut labore et dolore magna aliquyam erat, sed diam voluptua.
                </p>
                <div className="product-actions hstack justify-center gap-1 xl:mt-2">
                  {isAddedToCartProducts(product.id) ? (
                    <Link
                      href={"/shop-cart"}
                      className="btn btn-sm lg:btn-md btn-primary text-white md:max-w-150px flex-1"
                    >
                      View Cart
                    </Link>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-sm lg:btn-md btn-primary text-white md:max-w-150px flex-1"
                      onClick={() => addProductToCart(product.id)}
                    >
                      Add To Cart
                    </button>
                  )}
                </div>
                <ul className="nav-x mt-2 xl:mt-4 ft-tertiary">
                  <li className="hstack gap-narrow">
                    <span className="text-uppercase opacity-60 me-narrow">
                      SKU:
                    </span>
                    <span>HVRYXK 1</span>
                  </li>
                  <li className="hstack gap-narrow">
                    <span className="text-uppercase opacity-60 me-narrow">
                      Categories:
                    </span>
                    <Link className="text-primary" href={`/shop-category/Toys`}>
                      Toys
                    </Link>
                    ,
                    <Link
                      className="text-primary"
                      href={`/shop-category/Games`}
                    >
                      Games
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
        <div className="product-tabs panel mt-8">
          <ul
            className="product-tabs-nav uc-tab nav-x justify-center ft-tertiary h6 pb-2 border-bottom"
            data-uc-tab=""
          >
            <li className={activeTab == "description" ? "uc-active" : ""}>
              <a onClick={() => setActiveTab("description")}>Description</a>
            </li>
            <li className={activeTab == "review" ? "uc-active" : ""}>
              <a onClick={() => setActiveTab("review")}>Reviews (5)</a>
            </li>
          </ul>
          <div className="product-tabs-content uc-switcher mt-4 max-w-sm mx-auto">
            {activeTab == "description" && (
              <div className="uc-active">
                <div
                  id="product-details"
                  className="product-details panel py-2 lg:py-4"
                  data-uc-lightbox=""
                >
                  <h4 className="h5 lg:h4">Disney Toys collection:</h4>
                  <p>
                    Consetetur sadipscing elitr, syosma vero eos et accusam et
                    justo takimata sit amet sed diam nonumy eirmod tempor
                    invidunt ut labore et dolore magna aliquyam erat, sed diam
                    voluptua.
                  </p>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid iusto dolores laudantium commodi ut ullam id,
                    numquam repellat quo maiores excepturi cum atque
                    consequuntur alias sunt, dignissimos architecto odio unde!
                  </p>
                  <h4 className="h5 lg:h4 mt-4">Shipping details:</h4>
                  <p>
                    Accusamus odio soluta nostrum nemo esse explicabo ab eos sed
                    perspiciatis possimus.
                  </p>
                  <p>
                    Aliquid iusto dolores laudantium commodi ut ullam id,
                    numquam repellat quo maiores excepturi cum atque
                    consequuntur alias sunt, dignissimos architecto odio unde!
                  </p>
                </div>
              </div>
            )}
            {activeTab == "review" && (
              <div className="uc-active">
                <div
                  id="product-reviews"
                  className="product-reviews panel py-2 lg:py-4 overflow-hidden-x"
                >
                  <div className="row child-cols-12 g-9 " data-uc-grid="">
                    <div>
                      <div className="panel vstack gap-1 lg:gap-2">
                        <h4 className="h5 lg:h4 m-0">Reviews (5)</h4>
                        <p className="text-dark dark:text-white text-opacity-70">
                          Be the first to review “Disney Toys”
                        </p>
                        <div className="reviews-wrap panel vstack gap-4 mt-6">
                          <div className="reviews-lisiting panel row child-cols-12 sep-x gy-9">
                            <Reviews />
                          </div>
                          <div className="reviews-loadmore" hidden="">
                            <a
                              href="#"
                              className="btn btn-sm btn-outline-gray-100 w-100 text-dark dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                            >
                              Load more reviews
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="panel vstack gap-1 lg:gap-2"
                        data-uc-sticky="bottom: true; offset: 40;"
                      >
                        <h4 className="h5 lg:h4 m-0">Submit a review</h4>
                        <p className="text-dark dark:text-white text-opacity-70">
                          Your email address will not be published. Required
                          fields are marked <sup className="text-danger">*</sup>
                        </p>
                        <ReviewForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Products Related */}
        <FeaturedProducts />
      </div>
    </article>
  );
}