# Import the wrapper function from your package
from streamlit_custom_slider import st_custom_slider
import streamlit as st

st.title("Testing Streamlit custom components")

# Add Streamlit widgets to define the parameters for the CustomSlider
label = st.sidebar.text_input("Label of slider", "My Cool Slider")
min_value, max_value = st.sidebar.slider("Input range for slider", 0, 100, (0, 50))

# Now we can pass any data from Python to React (Frontend)
slider_component_value = st_custom_slider(label, min_value, max_value, key=1)

st.write(slider_component_value[0])
