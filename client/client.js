setTimeout(() => {
    res.write('event: cooking order\n')
    res.write(`data:  Ваша пицца: ${newOrder.description} готовится\n`);
    res.write("id: 1\n");
    res.write("\n");
}, 2000);
setTimeout(() => {
    res.write('event: packing order\n')
    res.write(`data:  Ваша пицца: ${newOrder.description} пакуется\n`);
    res.write("id: 1\n");
    res.write("\n");
}, 4000);
setTimeout(() => {
    res.write('event: delivering order\n')
    res.write(`data:  Ваша пицца: ${newOrder.description} доставляется\n`);
    res.write("id: 1\n");
    res.write("\n");
}, 6000);