$.each(data, function(i) {
	$('body').append('<article><h2>' + data[i].name + '</h2><small>' + data[i].title + '</small><p>' + data[i].description + '</p></article>')
});

$.fn.simpleSrc = function(input) {

	srcList = []

	input.search.each(function(i) {

		srcItem = {}
		$(this).addClass('s-' + i)
		currObj = $('.s-' + i)
		srcItem.obj = currObj
		srcItem.srcData = []
		currObj.children().each(function() {
			srcItem.srcData.push($(this).text())
		})
		srcList.push(srcItem)
	})

	input.field.keypress(function() {
		idx = []
		src = $(this).val()
		if (src != '') {
			console.log('true')
			$.each(srcList, function(i) {
				obj = srcList[i].obj
				ind = srcList[i].srcData
				$.each(ind, function(i) {
					idx[i] = (ind[i].indexOf(src))
				});

				$.each(idx, function(i) {
					if (idx[i] !== -1) {
						objtext = obj.children().eq(i).text()
						splice = objtext.substring(idx[i], src.length)
						b = objtext.substring(0, idx[i])
						a = objtext.substring((idx[i] + splice.length), (objtext.length - 1))
						splice = splice.replace(splice, '<span class="match">' + splice + '</span>')
						newText = b + splice + a
						console.log(newText)
						obj.children().eq(i).html(newText)
					}
				})
			})
		} else {
			$('.match').each(function(i) {
				orig = $(this).text
				$(this).replaceWith(orig)
			})
		}

	})
}



$('#search').simpleSrc({
	'field': $('#search'),
	'search': $('article')
});
