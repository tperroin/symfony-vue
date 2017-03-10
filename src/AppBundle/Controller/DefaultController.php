<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    /**
     * @Route("/")
     */
    public function indexAction()
    {
        $data = 'Thibault';
        return $this->render('AppBundle:Default:index.html.twig', array('data' => $data));
    }
}
