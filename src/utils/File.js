export function DownloadFile(fl) {
  const url = window.URL.createObjectURL(fl);
  const a = document.createElement("a");
  //   a.style.display = "none";
  a.href = url;
  // the filename you want
  a.download = fl.name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  //   window.URL.revokeObjectURL(url);
}
