function AlbumCtrl ($scope){
    
   
    $scope.images=[
        {category : '2014', image :  'img/album/2014/1.jpg', thumbnail : 'img/album/2014/1_th.jpg', description : 'Front View of Church Building' },
        {category : '2014', image :  'img/album/2014/2.jpg', thumbnail : 'img/album/2014/2_th.jpg', description : 'Celebration' },
        {category : '2014', image :  'img/album/2014/3.jpg', thumbnail : 'img/album/2014/3_th.jpg', description : 'Choir Ministration' },
        {category : '2014', image :  'img/album/2014/4.jpg', thumbnail : 'img/album/2014/4_th.jpg', description : 'Choir Ministration' },
        {category : '2014', image :  'img/album/2014/5.jpg', thumbnail : 'img/album/2014/5_th.jpg', description : 'Choir Ministration' },
        {category : '2014', image :  'img/album/2014/6.jpg', thumbnail : 'img/album/2014/6_th.jpg', description : 'Church Congregation' },
        {category : '2014', image :  'img/album/2014/7.jpg', thumbnail : 'img/album/2014/7_th.jpg', description : 'Church Congregation' },
        {category : '2015', image :  'img/album/2015/default.jpg', thumbnail : 'img/album/2015/default_th.jpg', description : 'Image 03' }
        
        
    ];
    
    
       
    
  
   
    
    
   $scope.currentImage = _.first($scope.images);
        $scope.imageCategories = _.uniq(_.pluck($scope.images, 'category'));
    
$scope.setCurrentImage= function (image){
      $scope.currentImage = image;
   };


}