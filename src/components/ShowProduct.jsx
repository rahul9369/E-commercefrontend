import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addcart } from "../features/CartSlice";
import { toast } from "react-toastify"; // Importing Toastify
import { NODE_API_ENDPOINT } from "../utils/utils";

function ProductShow() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isedit, setIsedit] = useState(false);
  const [commentid, setCommentid] = useState("");
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.user);
  const tokens = user?.token;
  console.log(user);
  console.log(user.id);

  // Comments and Rating
  const [comment, setComment] = useState("");
  const [newComment, setNewComment] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Fetch product details
    axios
      .get(`${NODE_API_ENDPOINT}/product/${id}`)
      .then((res) => {
        setProduct(res.data.Prod);
        console.log(res.data.Prod.Reviews);
        // console.log(res.data.Prod.Reviews[11]);
        setNewComment(res.data.Prod.Reviews);
        console.log(newComment);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [id]);

  const handleraddtocart = () => {
    dispatch(addcart(product)); // Dispatch the action to add to cart
    toast.success("Item added to cart!"); // Show success toast

    axios
      .post(
        `${NODE_API_ENDPOINT}/user/${id}/cart`,
        { product },
        {
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
        }
      )
      .then((res) => {
        console.log("Added to cart successfully:", res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleAddComment = async () => {
    if (comment.trim() === "" || rating === 0) {
      toast.error("Please provide a comment and rating.");
      return;
    }
    console.log(user);
    const commentData = {
      comment,
      rating,
      userid: user.id || "Anonymous",
    };

    try {
      // Add comment to the backend
      const res = await axios.post(
        `${NODE_API_ENDPOINT}/product/${id}/review`,
        commentData
      );
      console.log(commentData);
      console.log(res.data);
      console.log(newComment);
      setNewComment([...newComment, res.data]);
      console.log(newComment);
      newComment.find((item) => console.log(item));

      setComment("");
      setRating(0);
      toast.success("Comment added successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to add comment.");
    }
  };

  const updateHandler = async () => {
    if (!commentid) {
      toast.error("Error: No comment ID found!");
      return;
    }

    if (comment.trim() === "" || rating === 0) {
      toast.error("Please provide a comment and rating.");
      return;
    }

    const commentData = {
      comment,
      rating,
      userid: user.id || "Anonymous",
    };

    try {
      // Send the updated comment to the server
      const response = await axios.patch(
        `${NODE_API_ENDPOINT}/product/${commentid}/review`,
        commentData
      );

      // Update the local state by replacing the updated comment
      const updatedComments = newComment.map((item) =>
        item._id === commentid ? { ...item, ...commentData } : item
      );

      setNewComment(updatedComments);
      toast.success("Comment updated successfully!");

      // Clear input fields and reset edit mode
      setComment("");
      setRating(0);
      setIsedit(false);
      setCommentid("");
    } catch (error) {
      console.error("Error updating comment:", error);
      toast.error("Failed to update comment.");
    }
  };

  const editHandler = async (item) => {
    setIsedit(true);
    // setCommentid(item._id);
    console.log(item);
    console.log(item._id);
    setCommentid(item._id);
    console.log(commentid);

    setComment(item.comment);
    setRating(item.rating);

    //
  };

  const deleteHandler = async (item) => {
    console.log(item);
    try {
      // Sending a DELETE request to the server
      await axios.delete(
        `${NODE_API_ENDPOINT}/product/${item._id}/review/delete`
      );

      // Updating the local state to remove the deleted comment
      const updatedComments = newComment.filter(
        (comment) => comment._id !== item._id
      );
      setNewComment(updatedComments);

      toast.success("Comment deleted successfully!");
    } catch (error) {
      console.error("Error deleting comment:", error);
      toast.error("Failed to delete comment.");
    }
  };

  const productdeleteHandler = async (id) => {
    // Correctly initialize the navigate function

    try {
      // Send DELETE request
      const response = await axios.delete(
        `${NODE_API_ENDPOINT}/product/${id}/delete`
      );
      if (response.status === 200) {
        toast.success("Product deleted successfully!"); // Show success toast
        navigate("/"); // Navigate to home page
      } else {
        throw new Error("Failed to delete product.");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete the product. Please try again."); // Show error toast
    }
  };
  return (
    <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row gap-6">
      <div className="bg-white shadow-lg rounded-lg w-full md:w-3/5 h-auto md:h-[80vh] overflow-hidden">
        {isLoading ? (
          // Shimmer Loader
          <div className="animate-pulse">
            <div className="w-full h-56 bg-gray-300"></div>
            <div className="p-4">
              <div className="h-6 bg-gray-300 rounded mb-3 w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded mb-4 w-full"></div>
              <div className="h-4 bg-gray-300 rounded mb-3 w-1/2"></div>
              <div className="h-8 bg-gray-300 rounded w-1/3"></div>
            </div>
          </div>
        ) : (
          // Product Details
          <div>
            <img
              src={
                product.img ||
                "https://images.unsplash.com/photo-1594322436404-5a0526db4d13?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZXJyb3IlMjBpbWd8ZW58MHx8MHx8fDA%3D"
              }
              alt="Product"
              className="w-full h-72 mt-2 object-contain"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-gray-800 mb-2 truncate">
                {product.name || "Unnamed Product"}
              </h2>
              <p className="text-sm text-gray-600 mb-3">
                {product.desc || "No description available."}
              </p>
              <div className="text-xl font-semibold text-orange-500 mb-3">
                ₹{product.price || "N/A"}
              </div>
              {user.usertype === "seller" ? (
                <div className="flex gap-2">
                  <Link
                    to={`/products/${id}/update`}
                    className="flex-1 bg-blue-600 no-underline text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm text-center">
                    Update
                  </Link>
                  <button
                    className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition text-sm"
                    onClick={() => productdeleteHandler(id)}>
                    Delete
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <button
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition text-sm"
                    onClick={handleraddtocart}>
                    Add to Cart
                  </button>
                  <button className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition text-sm">
                    Buy Now
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Right Side: Scrollable */}
      <div className="bg-white shadow-lg rounded-lg p-4 w-full md:w-2/5 overflow-y-auto h-[calc(90vh-32px)]">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Comments</h3>
        {!isedit && newComment.find((commt) => commt.user._id === user.id) ? (
          <div>You have already reviewed</div>
        ) : (
          <div className="mb-4">
            <textarea
              className="w-full border rounded-lg p-2 mb-2"
              rows="3"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}></textarea>
            <select
              className="w-full border rounded-lg p-2 mb-2"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}>
              <option value="0">Select Rating</option>
              {[1, 2, 3, 4, 5].map((star) => (
                <option key={star} value={star}>
                  {star} Star{star > 1 ? "s" : ""}
                </option>
              ))}
            </select>
            <button
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={isedit ? updateHandler : handleAddComment}>
              {isedit ? "Update" : "Submit"}
            </button>
          </div>
        )}
        <div>
          {newComment.length > 0 ? (
            newComment.map((item, index) => (
              <div
                key={index}
                className="p-2 mb-3 bg-gray-100 rounded-lg border border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-bold">
                    {item.user?.username || item.username || "Unknown User"}
                  </h4>
                  <span className="text-sm text-orange-500">
                    {item.rating} ★
                  </span>
                </div>
                <p className="text-sm">{item.comment}</p>
                {user?.id === item?.user?._id ? (
                  <div className="flex gap-2">
                    <button
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
                      onClick={() => editHandler(item)}>
                      Edit
                    </button>
                    <button
                      className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors"
                      onClick={() => deleteHandler(item)}>
                      Delete
                    </button>
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <p className="text-gray-500">No comments yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductShow;
