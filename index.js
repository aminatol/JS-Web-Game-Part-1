function newImage(src, positionLeft, positionBottom) {
  let img = document.createElement("img");
  img.src = src;
  img.style.position = "fixed";
  img.style.left = `${positionLeft}px`;
  img.style.bottom = `${positionBottom}px`;
  document.body.append(img);
}

newImage("assets/green-character.gif", 100, 100);
newImage("assets/pine-tree.png", 450, 200);
newImage("assets/tree.png", 200, 300);
newImage("assets/pillar.png", 350, 100);
newImage("assets/crate.png", 150, 200);
newImage("assets/well.png", 500, 425);

function newItem(src, positionLeft, positionBottom) {
  let item = document.createElement("img");
  item.src = src;
  item.style.position = "fixed";
  item.style.left = `${positionLeft}px`;
  item.style.bottom = `${positionBottom}px`;
  document.body.append(item);
  item.addEventListener("dblclick", () => {
    item.remove();
  });
}

newItem("assets/sword.png", 500, 405);
newItem("assets/staff.png", 600, 100);
