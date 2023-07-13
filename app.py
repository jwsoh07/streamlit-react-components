# Import the wrapper function from your package
from streamlit_custom_slider import st_custom_slider
import streamlit as st

st.title("Testing Streamlit custom components")

# Now we can pass any data from Python to React (Frontend)
slider_component_value = st_custom_slider("James")

if slider_component_value:
    st.write("You have submitted: " + slider_component_value + " to the server.")
else:
    st.write("You have not entered any value to be submitted.")
