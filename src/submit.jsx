function handleSubmit(e) {
  e.preventDefault();
  alert("Form Submitted");
}
<form onSubmit={handleSubmit}>
  <input type="text" />
  <button type="submit">Submit</button>
</form>