/* Basic example */
QUnit.test("Basic Qunit test", function(assert) {
	var value="hello";
	assert.equal(value,"hello","We expet the value hello");
});

/* Assertion types*/
/*1 ok assertion*/
QUnit.test("Ok assertion emple",function (assert){
	assert.ok(1=="1","ok Test success");
})
//* equal test
QUnit.test("Equal test",function(assert){
	assert.equal(1,1,"Equal Test passed");
});
//depequal
QUnit.test("Deep equal",function(assert){
	var foo={jack :"bat"};
	assert.deepEqual(foo,{jack:"bat"},"Deep equal success");
});
//synchronous ttest
QUnit.test("A synchronous test",function(assert){
	expect(2);
	function calc(x,operation){
		return operation(x);
	}
	var result=calc(2,function(x){
		assert.ok(true,"Calc() success fully called");
		return x*x;
	});
	assert.equal(result,4,"2 square equals to 4");
});
//parctical example
/*QUnit.test( "a test", function( assert ) {
  expect( 1 );
  var $body = $( "body" );
  $body.on( "click", function() {
    assert.ok( true, "body was clicked!" );
  });
  $body.trigger( "click" );
});*/
//Asynchronout test
QUnit.asyncTest("A async test", function(assert){
	setTimeout(function(){
		assert.ok(true,"Excuted one second later");
		QUnit.start();
	});
})

//Testing User Actions
function keyLogger(target){
	if(!(this instanceof keyLogger)){
		return new keyLogger(target);
	}
	this.target=target;
	this.log=[];
	var self=this;
	this.target.off( "keydown" ).on( "keydown", function( event ) {
		self.log.push(event.keyCode);
	});
}

QUnit.test("A simple keylog event",function(assert){
	var event,
		$doc=$(document),
		keys=keyLogger($doc);

	event=$.Event("keydown");
	event.keyCode=9;
	$doc.trigger( event );
	assert.equal(keys.log.length,1,"A key pressed");
	assert.equal(keys.log[0], 9 ,"A keydown happened");
});

